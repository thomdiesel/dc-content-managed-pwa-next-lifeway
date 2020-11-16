const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'lifeway.cdn.content.amplience.net'
    },
    poweredByHeader: false
}