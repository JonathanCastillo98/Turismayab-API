import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDTO } from 'src/dto/categories.dto';

@Controller('categories')
export class CategoriesController {
    constructor(
        private readonly categoriesService: CategoriesService,
    ) {}

    @Post('create')
    public createCategory(@Body()body: CategoryDTO){
        return this.categoriesService.createCategory(body);
    }

    @Get('all')
    public getAllCategories(){
        return this.categoriesService.getAllCategories();
    }
}
