/** @type {import('next').NextConfig} */

const nextConfig={
  images:{
    domains :["cdn.sanity.io"],
  },
};

module.exports=nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     images: {
//       formats: ["image/avif", "image/webp"],

//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'template6-six.vercel.app/api/products',
//           port: '',
//           pathname: '/img/**',
//         },
//       ],
//     },
  
// };

// export default nextConfig;



