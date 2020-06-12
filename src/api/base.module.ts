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
import { ProductShippingClassController } from "./product-shipping-class/product-shipping-class.controller";
import { ProductTagController } from "./product-tag/product-tag.controller";
import { ProductReviewController } from "./product-review/product-review.controller";
import { ReportController } from "./report/report.controller";
import { TaxRateController } from "./tax-rate/tax-rate.controller";
import { TaxClassController } from "./tax-class/tax-class.controller";
import { SettingController } from "./setting/setting.controller";
import { SettingOptionController } from "./setting-option/setting-option.controller";
import { PaymentGatewayController } from "./payment-gateway/payment-gateway.controller";
import { ShippingZoneController } from "./shipping-zone/shipping-zone.controller";
import { ShippingZoneLocationController } from "./shipping-zone-location/shipping-zone-location.controller";
import { ShippingZoneMethodController } from "./shipping-zone-method/shipping-zone-method.controller";
import { ShippingMethodController } from "./shipping-method/shipping-method.controller";
import { SystemStatusController } from "./system-status/system-status.controller";
import { SystemStatusToolController } from "./system-status-tool/system-status-tool.controller";
import { DataController } from "./datas/data.controller";
import { SubscriptionController } from "./subscription/subscription.controller";
import { SubscriptionOrderController } from "./subscription-order/subscription-order.controller";
import { SubscriptionNoteController } from "./subscription-note/subscription-note.controller";

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
    ProductCategoryController,
    ProductShippingClassController,
    ProductTagController,
    ProductReviewController,
    ReportController,
    TaxRateController,
    TaxClassController,
    SettingController,
    SettingOptionController,
    PaymentGatewayController,
    ShippingZoneController,
    ShippingZoneLocationController,
    ShippingZoneMethodController,
    ShippingMethodController,
    SystemStatusController,
    SystemStatusToolController,
    DataController,
    SubscriptionController,
    SubscriptionOrderController,
    SubscriptionNoteController
  ],
  providers: []
})

export class BaseModule { }