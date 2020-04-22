//  ---------------------------------------------------------------------------------------------------------------------------

import { HttpModule } from "@nestjs/common";
import { EXAMPLE_CONSUMER_KEY, EXAMPLE_CONSUMER_SECRET } from "../../auth/constant/basic-info";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

/**
 * Declare httpmodule
 */
const baseModule = HttpModule.register({ headers: { 'Content-Type': 'application/json' } });

/**
 * Return http module
 *
 * @export
 * @returns
 */
export function getModuleHttp() {
  return baseModule;
}

const api = new WooCommerceRestApi({
  url: "http://139.99.76.109:30002/",
  consumerKey: EXAMPLE_CONSUMER_KEY,
  consumerSecret: EXAMPLE_CONSUMER_SECRET,
  version: "wc/v3"
});

export function getWoocommerce() {
  return api;
}