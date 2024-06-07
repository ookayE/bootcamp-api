const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDb = require("./config/db");

//Route files
const bootcamps = require("./routes/bootcamps");

//Load ENV variables
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDb();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//after importing logger.js from middleware folder, app.us still runs it
// app.use(logger);

// Mount bootcamp routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(
    `server running in: ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
