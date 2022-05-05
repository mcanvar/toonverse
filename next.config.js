/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    loader: "custom"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
