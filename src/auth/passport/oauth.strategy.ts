import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-oauth1';

@Injectable()
export class OAuthStrategy extends PassportStrategy(Strategy, 'oauth') {

  constructor() {
    super(
      {
        requestTokenURL: 'http://139.99.76.109:30002/wc-auth/v1/authorize',
        accessTokenURL: 'http://139.99.76.109:30002/wc-auth/v1/authorize',
        userAuthorizationURL: 'http://139.99.76.109:30002/wc-auth/v1/authorize',
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/example/callback",
        signatureMethod: "HMAC-SHA1"
      }
    );
  }

  async validate(token, tokenSecret, profile, cb) {
    console.log(profile);
  }
}
