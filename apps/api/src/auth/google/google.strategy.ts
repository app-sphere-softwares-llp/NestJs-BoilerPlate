import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

const GoogleTokenStrategy = require('passport-google-plus-token');

//
@Injectable()
export class GoogleStrategy extends PassportStrategy(GoogleTokenStrategy) {
  constructor() {
    super({
      clientID: '786347906702-f24fedavhbjl61iebi8e3obhdftj452k.apps.googleusercontent.com',
      clientSecret: 'ad1o3FgYmhCH6QeZYL5nr_LI',
    });
  }

  async validate(accessToken, refreshToken, profile) {
    // TODO: Validate or register the user locally
    return {
      userId: profile.id,
      name: profile.displayName,
      username: profile.emails[0].value,
      picture: profile.photos[0].value,
      roles: ['user']
    };
  }
}
