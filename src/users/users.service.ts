import { Injectable, Inject, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

import { User, Token } from './user.interface';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_MODEL') private readonly userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async create(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        let result = await createdUser.save();

        return result
    }

    async login(data : UserDto): Promise<Token> {
        let query = {
            username : data.username,
            password : data.password
        };

        let user = await this.userModel.findOne(query).exec();
        
        if(user){
            let payload = { username: user.username, password: user.password };

            let token : Token = {
                token : await this.jwtService.signAsync(payload)
            }

            // console.log(token)

            return token;
        }

        throw new ForbiddenException();
    }
}
