import { CategoryModel } from "src/models/category.model";

export interface IPost {
    title: string;
    description: string;
    image?: string | null;
    views: number;
    categoryId?: string;
}