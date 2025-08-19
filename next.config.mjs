/* eslint-disable */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'docs.docker.com',
      },
      {
        protocol: 'https',
        hostname: 'd1.awsstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.redhat.com',
      },
      {
        protocol: 'https',
        hostname: 'www.oracle.com',
      },
      {
        protocol: 'https',
        hostname: 'www.crowdstrike.com',
      },
      {
        protocol: 'https',
        hostname: 'www.browserstack.com',
      },
    ],
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: isDev
            ? "default-src 'self'; img-src 'self' https://images.unsplash.com https://docs.docker.com https://d1.awsstatic.com https://www.redhat.com https://www.oracle.com https://www.crowdstrike.com https://www.browserstack.com data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self';"
            : "default-src 'self'; img-src 'self' https://images.unsplash.com https://docs.docker.com https://d1.awsstatic.com https://www.redhat.com https://www.oracle.com https://www.crowdstrike.com https://www.browserstack.com data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self';"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
