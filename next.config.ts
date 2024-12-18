/*import nextMDX from "@next/mdx";*/
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // For DEV
  //reactStrictMode: true

  basePath: "",
  output: "export",
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
  
  // basePath: "/ariannelafraise-website"
  // used this to fix CSS issue when website is on a subpath.
  // no longer needed right now, since im using a custom domain for github pages
};

/*
const withMDX = nextMDX({
  extension: /\.mdx?$/
});

const nextConfig: NextConfig = withMDX({
  basePath: "",
  output: "export",
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
});
*/
export default nextConfig;
