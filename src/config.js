module.exports = {
    PORT: Number(process.env.PORT) || 3000,
    MONGODB_CONN_URI: process.env.MONGODB_CONN_URI,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE
}