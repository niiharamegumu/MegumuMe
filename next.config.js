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
    runtimeCaching
  }
}

module.exports = withPWA(config)
