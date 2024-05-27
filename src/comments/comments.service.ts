import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentModel } from 'src/models/comment.model';
import { PostsService } from 'src/posts/posts.service';
import { UsersService } from 'src/users/users.service';
import { ErrorManager } from 'src/utils/error.util';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(CommentModel) 
        private readonly commentRepository: Repository<CommentModel>,
        private readonly usersService: UsersService,
        private readonly postsService: PostsService,
    ){}

    public async createComment(content: string, postId: string, userId: string): Promise<CommentModel> {
        try {
            const user = await this.usersService.findUserById(userId);
            const post = await this.postsService.getPostById(postId);
            if(!user) throw new ErrorManager({ type: 'NOT_FOUND', message: 'User not found' });
            if(!post) throw new ErrorManager({ type: 'NOT_FOUND', message: 'Post not found' });
            const comment = await this.commentRepository.save({ content, post, user });
            return comment;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getCommentById(commentId: string): Promise<CommentModel> {
        try {
            const comment = await this.commentRepository.findOne({
                where: { id: commentId },
                relations: ['post', 'user'],
            });
            if(!comment) throw new ErrorManager({ type: 'NOT_FOUND', message: 'Comment not found' });
            return comment;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getAllComments(): Promise<CommentModel[]> {
        try {
            const comments = await this.commentRepository.find({
                relations: ['post', 'user'],
            });
            return comments;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getCommentsByPostId(postId: string): Promise<CommentModel[]> {
        try {            
            const comments = await this.commentRepository.find({
                where: { post: { id: postId } },
                relations: ['post', 'user'],
            })

            if (comments.length === 0) {
                throw new ErrorManager({
                    type: 'NOT_FOUND',
                    message: 'No comments found',
                });
            }
            return comments;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
