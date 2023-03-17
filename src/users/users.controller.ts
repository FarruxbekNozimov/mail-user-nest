import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { User } from './models/user.model';
import { CookieGetter } from '../decorators/cookieGetter.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto, createUserDto.password);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() userData: UpdateUserDto) {
    return await this.usersService.updateUser(+id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<number> {
    return await this.usersService.deleteUser(id);
  }

  @Get('activate/:link')
  activate(@Param('link') link: string) {
    console.log(link);
    return this.usersService.activate(link);
  }
}
