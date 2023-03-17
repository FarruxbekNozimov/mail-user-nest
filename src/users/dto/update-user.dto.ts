export class UpdateUserDto {
  readonly username?: string;
  readonly hashed_password?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly user_photo?: string;
  readonly birthday?: string;
  readonly hashed_refresh_token?: string;
  readonly activation_link?: string;
}
