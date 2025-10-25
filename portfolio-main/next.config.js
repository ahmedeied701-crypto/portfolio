/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // Updated for better compatibility
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // You can add more Next.js 14 configurations here if needed
};

module.exports = nextConfig;
