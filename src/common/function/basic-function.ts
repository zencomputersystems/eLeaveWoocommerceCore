//  ---------------------------------------------------------------------------------------------------------------------------

import { HttpModule } from "@nestjs/common";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

/**  Declare httpmodule */
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

export function runServiceQuery([method, endpoint, data, params, res]: [any, string, any, any, any]) {
  let api = getWoocommerce();
  if (method == 'post') { method = api.post(endpoint, data, params); }
  else if (method == 'patch') { method = api.put(endpoint, data, params); }
  else if (method == 'delete') { method = api.delete(endpoint, params); }
  else { method = api.get(endpoint, params); }

  method
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error.response.data);
    })
    .finally((result) => {
    });

}