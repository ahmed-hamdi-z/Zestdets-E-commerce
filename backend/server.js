const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const dotenv = require('dotenv')


// Handdle unaught exceptions
process.on(`uncaughtException`, (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("shuting down the server");
  process.exit(1);
});

// setting up config file
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} mode.node`
  );
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// handdle unhanddle promis rejectiona

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("shuting down the server");
  server.close(() => {
    process.exit(1);
  });
});
