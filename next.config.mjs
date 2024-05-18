/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.cdninstagram.com',
            port: '',
            pathname: '/v/t51.2885-19/*',
          },
        ],
    },
};

export default nextConfig;
