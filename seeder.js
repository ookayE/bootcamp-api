const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Load models
const Bootcamp = require("./models/Bootcamps"); // Ensure the path is correct

// Connect to database
mongoose.connect(process.env.MONGO_URI, {});

// Locate and read json files found in our data folder
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

// Import into database
const importData = async () => {
  try {
    await Bootcamp.deleteMany(); // Delete all existing bootcamps
    await Bootcamp.create(bootcamps);
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log("Data deleted...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// See if we want to import or delete
if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
} else {
  console.log(
    "Invalid option. Use -i to import data or -d to delete data.".yellow.bold
  );
  process.exit();
}
