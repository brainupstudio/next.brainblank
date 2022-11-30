/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
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
      {
        protocol: 'https',
        hostname: `${process.env.PRODUCTION_IMAGES_HOSTNAME}`,
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
