/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/portfolio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
