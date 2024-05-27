import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService,
    ) {}

    @Post('/create')
    public createComment(@Body() body: {content: string}, @Query('postId') postId: string, @Query('userId') userId: string) {
        return this.commentsService.createComment(body.content, postId, userId);
    }

    @Get('/all')
    public getAllComments() {
        return this.commentsService.getAllComments();
    }

    @Get('/postOwner/:postId')
    public getCommentsByPostId(@Param('postId') postId: string) {
        return this.commentsService.getCommentsByPostId(postId);
    }

    @Get(':commentId')
    public getCommentById(@Param('commentId') commentId: string) {
        return this.commentsService.getCommentById(commentId);
    }
}
