/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.gamebanana.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scmapdb.wdfiles.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "4evergaming.com.ar",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gamemaps.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "steamuserimages-a.akamaihd.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
