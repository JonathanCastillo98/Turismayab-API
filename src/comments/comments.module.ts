import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentModel } from 'src/models/comment.model';
import { UserModel } from 'src/models/user.model';
import { PostModel } from 'src/models/post.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { PostsService } from 'src/posts/posts.service';
import { CategoryModel } from 'src/models/category.model';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentModel, UserModel, PostModel, CategoryModel])],
  providers: [CommentsService, UsersService, PostsService, CategoriesService],
  controllers: [CommentsController],
  exports: [CommentsService, TypeOrmModule],
})
export class CommentsModule {}
