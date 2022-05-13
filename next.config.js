/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    loader: "custom",
    path: isProd ? 'https://toonverse.club/' : 'http://0.0.0.0:3000/'
  },
  reactStrictMode: true,
}

module.exports = nextConfig
