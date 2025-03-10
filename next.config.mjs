import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            }
        ],
        domains: ["i.pinimg.com"], // ✅ Add allowed domain here
    }
};

export default withNextIntl(nextConfig);
