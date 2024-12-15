import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For DEV
  //reactStrictMode: true

  basePath: "",
  output: "export",
  images: {
    unoptimized: true
  }
  
  // basePath: "/ariannelafraise-website"
  // used this to fix CSS issue when website is on a subpath.
  // no longer needed right now, since im using a custom domain for github pages
};

export default nextConfig;
