/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    domains: ["lh3.googleusercontent.com","firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
