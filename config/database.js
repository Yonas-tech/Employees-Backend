const mongoose = require('mongoose');
// require('dotenv').config()

// MONGOOSE:

// CONFIGURATIONS:
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// CONNECT TO MONGO
const connectDB = async () => {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  } catch (err) {
    console.log(err)
  }

  // CONNECTION MESSAGES (OPTIONAL):
  // db.on('connected', function () {
  //   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
  // });
}

module.exports = connectDB




