/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/blog",
        destination: "https://blog.wuchuan.xyz",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
