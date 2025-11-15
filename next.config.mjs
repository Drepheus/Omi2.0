/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js', 'gsap', 'ai'],
  },
};

export default nextConfig;
