import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'utils');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fiverr.ck-cdn.com', // NEU hinzugefügt
      },
      {
        protocol: 'https',
        hostname: 'fiverr-res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
