import { Module } from "@nestjs/common";
import { getModuleHttp } from "../common/function/basic-function";

import { CouponController } from "./coupon/coupon.controller";
import { CustomerController } from "./customer/customer.controller";
import { OrderController } from "./order/order.controller";
import { OrderNotesController } from "./order-notes/order-notes.controller";
import { RefundController } from "./refund/refund.controller";
import { ProductController } from "./product/product.controller";
import { ProductVariationController } from "./product-variation/product-variation.controller";
import { ProductAttributeController } from "./product-attribute/product-attribute.controller";
import { ProductAttributeTermController } from "./product-attribute-term/product-attribute-term.controller";
import { ProductCategoryController } from "./product-category/product-category.controller";

@Module({
  imports: [
    getModuleHttp()
  ],
  controllers: [
    CouponController,
    CustomerController,
    OrderController,
    OrderNotesController,
    RefundController,
    ProductController,
    ProductVariationController,
    ProductAttributeController,
    ProductAttributeTermController,
    ProductCategoryController
  ],
  providers: []
})

export class BaseModule { }