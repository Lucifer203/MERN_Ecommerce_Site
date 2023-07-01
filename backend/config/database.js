const mongoose = require("mongoose");

const mongoUri =
  "mongodb://127.0.0.1:27017/Ecommerce" || process.env.CONNECTION_STRING;

const connectToMongo = async () => {
  try {
    const connect = await mongoose.connect(mongoUri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectToMongo;
