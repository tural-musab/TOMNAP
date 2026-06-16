/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.tomnap.com"
          }
        ],
        destination: "https://tomnap.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
