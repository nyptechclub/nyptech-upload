/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: process.env.CONVEX,
        },
      ],
    },
  };
  
  export default nextConfig;