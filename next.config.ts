import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/kanwil-ditjenpas-kaltim",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;