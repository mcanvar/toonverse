/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/toonverse/' : '',
  images: {
    loader: "custom"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
