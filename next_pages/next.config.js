/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['camo.githubusercontent.com',`robohash.org`],
  }
  //https://robohash.org/
}

module.exports = nextConfig
