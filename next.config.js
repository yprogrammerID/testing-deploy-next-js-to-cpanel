/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  webpack: (config, options) => {
    config.optimization.minimize = false;
    return config;
  },
};

module.exports = nextConfig;
