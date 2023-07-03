const app = require("./app");
const dotenv = require("dotenv");
const connectToMongo = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to uncaught exception`);
  process.exit(1);
});

//database connection
console.log(process.env.CONNECTION_STRING);
connectToMongo();

//config
const port = 5000;

const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
