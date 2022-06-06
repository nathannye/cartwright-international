/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      rules: {
        parser: {
          amd: false,
        },
      },
    });
  },
};
