import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  }
};

export default nextConfig;
