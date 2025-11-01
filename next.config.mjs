/* eslint-disable */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "docs.docker.com",
      },
      {
        protocol: "https",
        hostname: "d1.awsstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.redhat.com",
      },
      {
        protocol: "https",
        hostname: "www.oracle.com",
      },
      {
        protocol: "https",
        hostname: "www.crowdstrike.com",
      },
      {
        protocol: "https",
        hostname: "www.browserstack.com",
      },
      {
        protocol: "https",
        hostname: "avatars.dicebear.com",
        pathname: "/api/initials/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
    domains: ["ui-avatars.com", "logo.clearbit.com", "via.placeholder.com", "randomuser.me"],
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== "production";
    const imgSrc = [
      "'self'",
      "https://images.unsplash.com",
      "https://docs.docker.com",
      "https://d1.awsstatic.com",
      "https://www.redhat.com",
      "https://www.oracle.com",
      "https://www.crowdstrike.com",
      "https://www.browserstack.com",
      "https://ui-avatars.com",
      "https://logo.clearbit.com",
      "https://via.placeholder.com",
      "https://avatars.dicebear.com",
      "https://randomuser.me",
      "data:",
    ].join(" ");
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: isDev
              ? `default-src 'self'; img-src ${imgSrc}; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self';`
              : `default-src 'self'; img-src ${imgSrc}; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self';`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
