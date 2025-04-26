import pkg from 'next';

const nextConfig = {
  /* config options here */
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  }
};

export default nextConfig;