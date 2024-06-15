const dotenv = require("dotenv");

// Load ENV variables
dotenv.config({ path: "./config/.env" });

console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("GEOCODER_PROVIDER:", process.env.GEOCODER_PROVIDER);
console.log("GEOCODER_API_KEY:", process.env.GEOCODER_API_KEY);
