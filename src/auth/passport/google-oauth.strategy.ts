import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
// import { EXAMPLE_CONSUMER_KEY, EXAMPLE_CONSUMER_SECRET } from '../constant/basic-info';
import { Strategy } from 'passport-google-oauth1';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google') {

  constructor() {
    super(
      {
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        userAuthorizationURL: 'http://139.99.76.109:30002/wc-auth/v1/authorize',
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/example/callback",
        signatureMethod: "HMAC-SHA1"
      }
    );
  }

  // async validate(token, tokenSecret, profile, cb) {
  //   console.log(profile);
  // }
}
