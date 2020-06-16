require('dotenv').config();

// db connection
exports.MONGODB_URI = checkConfigValue(process.env.MONGODB_URI);
// app secret key
exports.APP_SECRET_KEY = checkConfigValue(process.env.APP_SECRET_KEY);
// server port
exports.SERVER_PORT = checkConfigValue(process.env.PORT || 8080);

function checkConfigValue(config) {
    if (!config) {
        throw new Error('YOU MUST SET ALL ENVIRONMENT CONFIGURATIONS');
    }
    return config;
}
