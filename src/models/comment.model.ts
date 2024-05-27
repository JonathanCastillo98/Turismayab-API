import { IComment } from "../interfaces/comment.interface";
import { BaseModel } from "./base.model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { PostModel } from "./post.model";
import { UserModel } from "./user.model";

@Entity({name: 'comments'})
export class CommentModel extends BaseModel implements IComment{
    @Column()
    content: string

    @ManyToOne(() => PostModel, (post) => post.comments)
    @JoinColumn({name: 'post_id'})
    post: PostModel

    @ManyToOne(() => UserModel, (user) => user.comments)
    @JoinColumn({name: 'user_id'})
    user: UserModel
}