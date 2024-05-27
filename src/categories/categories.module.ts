import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModel } from 'src/models/category.model';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel])],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
