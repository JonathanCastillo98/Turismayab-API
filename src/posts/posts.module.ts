import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModel } from 'src/models/post.model';
import { UserModel } from 'src/models/user.model';
import { UsersService } from 'src/users/users.service';
import { CategoryModel } from 'src/models/category.model';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostModel, UserModel, CategoryModel])],
  providers: [PostsService, UsersService, CategoriesService],
  controllers: [PostsController],
  exports: [PostsService, TypeOrmModule],
})
export class PostsModule {}
