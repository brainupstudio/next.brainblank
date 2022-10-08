/** @type {import('next').NextConfig} */

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
  }
}

module.exports = nextConfig
