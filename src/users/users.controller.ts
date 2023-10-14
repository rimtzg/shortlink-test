import { Controller, Get, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    async create(@Body() createUserDto: UserDto) {
        return this.usersService.create(createUserDto)
    }

    @Post('login')
    async login(@Body() userDto: UserDto) {
        return this.usersService.login(userDto)
    }

    // @Get()
    // async findAll(): Promise<User[]> {
    //     return this.usersService.login();
    // }
}
