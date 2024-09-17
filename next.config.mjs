/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: process.env.CONVEX,
        },
      ],
      domains: [
          "files.edgestore.dev"
        ]
    },
  };
  
  export default nextConfig;