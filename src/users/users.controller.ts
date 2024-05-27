import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from '../dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    @Post('create')
    public async createUser(
        @Body() body: UsersDTO
    ) {
        return await this.usersService.createUser(body);
    }
}
