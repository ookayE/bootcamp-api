const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDb = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/error");

//Route files
const bootcamps = require("./routes/bootcamps");

//Load ENV variables
dotenv.config({ path: "./config/.env" });

// Connect to Database
connectDb();
const app = express();

//Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//after importing logger.js from middleware folder, app.us still runs it
// app.use(logger);

// Mount bootcamp routers
app.use("/api/v1/bootcamps", bootcamps);

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(
    `server running in: ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow
      .bold
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
