import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { PostsDTO } from 'src/dto/posts.dto';
import { CategoryModel } from 'src/models/category.model';
import { PostModel } from 'src/models/post.model';
import { UsersService } from 'src/users/users.service';
import { ErrorManager } from 'src/utils/error.util';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostModel)
        private readonly postRepository: Repository<PostModel>,
        private readonly usersService: UsersService,
        private readonly categoryService: CategoriesService,
    ) {}

    public async createPost(body: PostsDTO, userId: string): Promise<any> {
        try {
            const usr = await this.usersService.findUserById(userId);
            if(!usr) throw new ErrorManager({ type: 'NOT_FOUND', message: 'User not found' });
            const{categoryId} = body;
            let cate:CategoryModel | null;
            if(categoryId) {
                const cat = await this.categoryService.findCategoryById(categoryId);
                if(!cat) throw new ErrorManager({ type: 'NOT_FOUND', message: 'Category not found' });
                cate = cat;
            }
            const post = await this.postRepository.save({ ...body, user: usr, category: cate });
            
            const {user, category, ...newPost} = post;          
            return newPost;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getAllPosts(page: string, category: string): Promise<{posts: PostModel[], count: number}> {
        const POSTS_PER_PAGE = 2;
        try {
            const posts = await this.postRepository.find({
                take: POSTS_PER_PAGE,
                skip: POSTS_PER_PAGE * (+page - 1),
                where: {...(category && { category: { name: category } })},
                relations: ['category'],
            });
            
            if (posts.length === 0) {
                throw new ErrorManager({
                    type: 'NOT_FOUND',
                    message: 'No posts found',
                });
            }
            return {posts, count: posts.length};
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getPostById(postId: string): Promise<PostModel> {
        try {
            const post = await this.postRepository.findOne({ 
                where: { id: postId },
                relations: ['user', 'category'],
            });

            if(!post) throw new ErrorManager({ type: 'NOT_FOUND', message: 'Post not found' });
            return post;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
