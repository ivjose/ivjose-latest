 

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/home',
        destination: 'https://google.com',
        permanent: false,
      },

    ]
  },
}
 
export default nextConfig