const mongoose = require('mongoose');
require('dotenv').config()

// MONGOOSE:

// CONFIGURATIONS:
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;  

// CONNECT TO MONGO
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, 
                { useNewUrlParser: true, 
                 useUnifiedTopology: true });

// CONNECTION MESSAGES (OPTIONAL):
db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});





