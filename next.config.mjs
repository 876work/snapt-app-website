/** @type {import('next').NextConfig} */
const nextConfig = {
  // The design bundle in project/ is reference material, not application source.
  outputFileTracingExcludes: {
    '*': ['./project/**', './chats/**'],
  },
};

export default nextConfig;
