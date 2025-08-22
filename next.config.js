/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};
module.exports = nextConfig;
