import { IUser } from "../interfaces/user.interface";
import { BaseModel } from "./base.model";
import { Column, Entity, OneToMany } from "typeorm";
import { CommentModel } from "./comment.model";
import { PostModel } from "./post.model";

@Entity({name: 'users'})
export class UserModel extends BaseModel implements IUser {
    @Column()
    firstname: string;
    
    @Column()
    lastname: string;
    
    @Column({unique: true})
    email: string;
    
    @Column({type: 'boolean', default: false})
    emailVerified: boolean;
    
    @Column({nullable: true})
    image?: string | null;

    @Column({nullable: true})
    age?: number | null;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @OneToMany(() => CommentModel, comment => comment.user)
    comments: CommentModel[];

    @OneToMany(() => PostModel, post => post.user)
    posts: PostModel[];
}