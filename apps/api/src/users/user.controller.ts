import { Body, Controller, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../shared/services/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { SendSmsModel, User } from '@nest-js-boiler-plate/models';
import { SmsService } from '../shared/services/sms/sms.service';

@Controller('user')
// @UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly _userService: UsersService, private _smsService: SmsService) {
  }

  @Get('profile')
  async getUser(@Request() req) {
    return await this._userService.getUserProfile(req.user.id);
  }

  @Put('profile')
  async updateUserProfile(@Body() id: string, @Body() user: Partial<User>) {
    return await this._userService.updateUser(id, user, null);
  }
}
