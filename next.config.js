/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig

/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const config = {
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware\.js$/,
      /_middleware\.js\.map$/,
      /middleware-runtime\.js$/,
      /middleware-runtime\.js\.map$/
    ]
  }
}

module.exports = withPWA(config)
