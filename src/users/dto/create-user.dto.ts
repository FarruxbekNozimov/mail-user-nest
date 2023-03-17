import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
