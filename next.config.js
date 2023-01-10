/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const prod = process.env.NODE_ENV === 'production';

const config = {
  productionBrowserSourceMaps: true, //to enable browser source map generation during the production build
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'localhost', 'drive.google.com', 'lh3.googleusercontent.com'],
  },
  compiler: {
    removeConsole: {
      exclude: prod ? ['error'] : ['log', 'warn'],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  // pwa: {
  //   // disable: prod ? false : true,
  //   // dest: 'public',
  //   // register: true,
  //   // mode: 'production',
  //   // skipWaiting: true,
  //   // runtimeCaching,
  // },
  // devIndicators: {
  //   autoPrerender: false,
  // },
  // compiler: {
  //   emotion: true,
  // },
  typescript: {
    tsconfigPath: prod ? './tsconfig.prod.json' : './tsconfig.json',
  },
};

module.exports = config;
