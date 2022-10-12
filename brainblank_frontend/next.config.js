/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337'
      },
      {
        protocol: 'https',
        hostname: 'getuikit.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:node/:slug',
        destination: '/:slug',
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
