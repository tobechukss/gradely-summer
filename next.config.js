/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/parents',
        permanent: true,
      },
      {
        source: '/parents',
        destination: '/parents/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
