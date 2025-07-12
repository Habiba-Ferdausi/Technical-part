import type { NextConfig } from "next";

const nextConfig: NextConfig = {
env:{
  NEXT_PUBLIC_HUB_URL: 'https://tech-test.raintor.com/Hub',
  NEXT_PUBLIC_USERS_URL: 'https://tech-test.raintor.com/api/users',
},
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*',
      port: '',
      
    },
  ],
},
eslint: {
  ignoreDuringBuilds: true,
},
};

export default nextConfig;
