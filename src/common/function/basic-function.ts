//  ---------------------------------------------------------------------------------------------------------------------------

import { HttpModule } from "@nestjs/common";
// import { EXAMPLE_CONSUMER_KEY, EXAMPLE_CONSUMER_SECRET } from "../../auth/constant/basic-info";
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

const dotenv = require('dotenv');
dotenv.config();

const api = new WooCommerceRestApi({
  url: process.env.URL_STORE,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: "wc/v3"
});

export function getWoocommerce() {
  return api;
}