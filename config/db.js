const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB is GOOOD');
  } catch (err) {
    console.error(err.message, 'did not connect to db');
    process.exit(1);
  }
};

module.exports = connectDB;
