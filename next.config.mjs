/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "randomuser.me",
        },
      ],
    },
  
    experimental: {
      serverActions: {
        bodySizeLimit: "5mb",
      },
    },
  };
  
  // export default nextConfig;
  

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "randomuser.me",
//       },
//     ],
//   },

//   experimental: {
//     serverActions: {
//       bodySizeLimit: "5mb",
//     },
//   },

//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         net: false,
//         tls: false,
//         crypto: false,
//         stream: false,
//         url: false,
//         zlib: false,
//         http: false,
//         https: false,
//         assert: false,
//         os: false,
//         path: false,
//       };
//     }
//     return config;
//   },
// };

// export default nextConfig;

// Added webpack fallback for 'fs' to fix client-side import errors
const nextConfigWithWebpack = {
  ...nextConfig,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfigWithWebpack;