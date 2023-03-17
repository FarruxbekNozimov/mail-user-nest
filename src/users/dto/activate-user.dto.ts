import { IsNotEmpty } from 'class-validator';

export class ActivateUserDto {
  @IsNotEmpty()
  readonly userId: number;
}
