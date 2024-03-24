import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from '@app/common/decorators';
import { UserDocument } from './users/model/user.schema';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @CurrentUser() user : UserDocument,
    @Res({ passthrough: true }) response: Response
  ) {
    console.log("USER === ", user);
    await this.authService.login(user, response);
    response.send(user);
  }
}
