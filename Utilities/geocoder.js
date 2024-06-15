const NodeGeocoder = require("node-geocoder");
const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config({ path: "./config/.env" });

const options = {
  provider: process.env.GEOCODER_PROVIDER || "mapquest",
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
