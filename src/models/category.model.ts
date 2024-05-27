import { ICategory } from "../interfaces/category.interface";
import { BaseModel } from "./base.model";
import { Column, Entity, OneToMany } from "typeorm";
import { PostModel } from "./post.model";

@Entity({name: 'categories'})
export class CategoryModel extends BaseModel implements ICategory {
    @Column()
    name: string;

    @Column({nullable: true})
    image?: string | null;

    @OneToMany(() => PostModel, (post) => post.category)
    posts: PostModel[];
}