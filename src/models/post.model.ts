import { IPost } from "../interfaces/post.interface";
import { BaseModel } from "./base.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryModel } from "./category.model";
import { CommentModel } from "./comment.model";
import { UserModel } from "./user.model";

@Entity({name: 'posts'})
export class PostModel extends BaseModel implements IPost {
    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    image?: string | null;

    @Column({type: 'int', default: 0})
    views: number;

    @ManyToOne(() => CategoryModel, category => category.posts)
    @JoinColumn({name: 'category_id'})
    category: CategoryModel;

    @ManyToOne(() => UserModel, user => user.posts)
    @JoinColumn({name: 'user_id'})
    user: UserModel;
    
    @OneToMany(() => CommentModel, comment => comment.post)
    comments: CommentModel[];

}