import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryDTO } from 'src/dto/categories.dto';
import { CategoryModel } from 'src/models/category.model';
import { ErrorManager } from 'src/utils/error.util';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryModel)
        private readonly categoryRepository: Repository<CategoryModel>
    ){}

    public async createCategory(body: CategoryDTO): Promise<CategoryModel> {
        try {
            return await this.categoryRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getAllCategories(): Promise<CategoryModel[]> {
        try {
            const categories = await this.categoryRepository.find();
            if (categories.length === 0) {
                throw new ErrorManager({
                    type: 'NOT_FOUND',
                    message: 'No categories found',
                });
            }
            return categories;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async findCategoryById(categoryId: string): Promise<CategoryModel> {
        try {
            const category = await this.categoryRepository.createQueryBuilder('category').where({ id: categoryId }).getOne();
            if(!category) throw new ErrorManager({ type: 'NOT_FOUND', message: 'category not found' });
            return category;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
