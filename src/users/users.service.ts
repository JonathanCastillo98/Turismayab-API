import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDTO } from '../dto/users.dto';
import { UserModel } from '../models/user.model';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ErrorManager } from 'src/utils/error.util';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>
    ){}

    public async createUser(body: UsersDTO): Promise<UserModel> {
        try {
            const hashedPassword = await bcrypt.hash(body.password, +process.env.HASH_SALT);
            body.password = hashedPassword;
            return await this.userRepository.save(body);
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);           
        }
    }

    public async findUserById(userId: string): Promise<UserModel> {
        try {
            const user = await this.userRepository.createQueryBuilder('user').where({ id: userId }).leftJoinAndSelect('user.posts', 'posts').getOne();
            if(!user) throw new ErrorManager({ type: 'NOT_FOUND', message: 'User not found' });
            return user;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
