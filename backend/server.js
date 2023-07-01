const app = require("./app");
const dotenv = require("dotenv");
const connectToMongo = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

//database connection
console.log(process.env.CONNECTION_STRING);
connectToMongo();

//config
const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
