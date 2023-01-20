/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["i.ytimg.com"],
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "ytimg.com",
      // },
    ],
  },
};

module.exports = nextConfig;
