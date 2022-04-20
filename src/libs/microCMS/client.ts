import { createClient } from 'microcms-js-sdk'

const productsApiKey = process.env.NEXT_PUBLIC_PRODUCTS_API_KEY
const blogsApiKey = process.env.NEXT_PUBLIC_BLOGS_API_KEY
const productsServiceDomain = process.env.NEXT_PUBLIC_PRODUCTS_SERVICE_DOMAIN
const blogsServiceDomain = process.env.NEXT_PUBLIC_BLOGS_SERVICE_DOMAIN

if (productsApiKey === undefined)
  throw Error(
    '.envファイルに`NEXT_PUBLIC_PRODUCTS_API_KEY`を設定してください。'
  )
if (blogsApiKey === undefined)
  throw Error('.envファイルに`NEXT_PUBLIC_BLOGS_API_KEY`を設定してください。')
if (productsServiceDomain === undefined)
  throw Error(
    '.envファイルに`NEXT_PUBLIC_PRODUCTS_SERVICE_DOMAIN`を設定してください。'
  )
if (blogsServiceDomain === undefined)
  throw Error(
    '.envファイルに`NEXT_PUBLIC_BLOGS_SERVICE_DOMAIN`を設定してください。'
  )

export const clientProducts = createClient({
  serviceDomain: productsServiceDomain,
  apiKey: productsApiKey
})
export const clientBlogs = createClient({
  serviceDomain: blogsServiceDomain,
  apiKey: blogsApiKey
})
