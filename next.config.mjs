/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URL: process.env.OPENAI_API_KEY
    }
};

export default nextConfig;
