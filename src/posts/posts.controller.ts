import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsDTO } from 'src/dto/posts.dto';
import { query } from 'express';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) {}

    @Post('create/userOwner/:userId')
    public createPost(@Body() body: PostsDTO, @Param('userId') userId: string) {
        return this.postsService.createPost(body, userId);
    }

    @Get('all')
    public getAllPosts(@Query('page') page: string, @Query('category') category: string) {
        return this.postsService.getAllPosts(page, category);
    }

    @Get(':postId')
    public getPostById(@Param('postId') postId: string) {
        return this.postsService.getPostById(postId);
    }
}
