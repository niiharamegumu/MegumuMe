import { createClient } from "microcms-js-sdk";

const productsApiKey = process.env.NEXT_PUBLIC_PRODUCTS_API_KEY;
const productsServiceDomain = process.env.NEXT_PUBLIC_PRODUCTS_SERVICE_DOMAIN;

if (productsApiKey === undefined)
  throw Error(
    ".envファイルに`NEXT_PUBLIC_PRODUCTS_API_KEY`を設定してください。"
  );
if (productsServiceDomain === undefined)
  throw Error(
    ".envファイルに`NEXT_PUBLIC_PRODUCTS_SERVICE_DOMAIN`を設定してください。"
  );

export const clientProducts = createClient({
  serviceDomain: productsServiceDomain,
  apiKey: productsApiKey,
});
