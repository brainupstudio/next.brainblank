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
