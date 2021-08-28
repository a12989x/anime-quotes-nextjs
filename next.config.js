// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
});

module.exports = nextConfig;
