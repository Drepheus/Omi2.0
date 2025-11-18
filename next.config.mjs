/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js', 'gsap', 'ai'],
  },
};

export default nextConfig;
