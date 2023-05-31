const allowedOrigins = require('./allowedOrigins');

const origins = [
    'http://localhost:3000',
    'http://localhost:3001/',
    'https://localhost:3001',
    'https://localhost:3000/'
]

const corsOptions = {
    origin: (origin, callback) => {
        if (origins.indexOf(origin) !== -1 || !origin){
            callback(null, true)  // null - for no error, true - for success
        } else {
            callback(new Error('Not allowed by CORS'), origins)
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions