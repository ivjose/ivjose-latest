 

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/home',
        destination: 'https://ivjose.com',
        permanent: true,
      },

    ]
  },
}
 
export default nextConfig