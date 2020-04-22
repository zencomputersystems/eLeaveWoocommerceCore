import { Module } from "@nestjs/common";
import { getModuleHttp } from "../common/function/basic-function";
import { CouponController } from "./coupon/coupon.controller";
import { CustomerController } from "./customer/customer.controller";
import { GoogleOAuthStrategy } from "../auth/passport/google-oauth.strategy";
import { OAuthStrategy } from "../auth/passport/oauth.strategy";

@Module({
  imports: [OAuthStrategy, GoogleOAuthStrategy, getModuleHttp()],
  controllers: [CouponController, CustomerController],
  providers: []
})

export class BaseModule { }