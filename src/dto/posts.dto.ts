import { IsNotEmpty, IsOptional, IsString } from "class-validator"
import { CategoryModel } from "src/models/category.model"

export class PostsDTO {
    @IsNotEmpty()
    @IsString()
    title: string
    
    @IsNotEmpty()
    @IsString()
    description: string
    
    @IsOptional()
    image?: string | null
    
    @IsOptional()
    views: number

    @IsOptional()
    categoryId?: string

    @IsOptional()
    category?: CategoryModel
}