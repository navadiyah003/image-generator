module.exports = {
    crossOrigin: 'anonymous',
    swcMinify: true,
    env: {
        SERVING_URL: process.env.SERVING_URL || 'https://api.usp.ai'
    },
    images: {
        domains: ['cdn.discordapp.com'],

    },

}
