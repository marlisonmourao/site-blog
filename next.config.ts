import type { NextConfig } from 'next'
const { withContentlayer } = require('next-contentlayer')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
}

export default withContentlayer(nextConfig)
