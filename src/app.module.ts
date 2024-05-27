import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { TownsModule } from './towns/towns.module';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.develop.env`
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    UsersModule, 
    CategoriesModule, 
    CommentsModule, 
    PostsModule, TownsModule, RegionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
