/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "dynamic-guineapig-472.convex.cloud",
        },
      ],
    },
  };
  
  export default nextConfig;