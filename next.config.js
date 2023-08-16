/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript:{
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig