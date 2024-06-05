const express = require("express");
const router = express.Router();

// get all bootcamps
router.get("/", (request, response) => {
  response.status(200).json({ success: true, message: "Show all bootcamps" });
});

// get single bootcamp
router.get("/:id", (request, response) => {
  response
    .status(200)
    .json({ success: true, message: `Get bootcamp ${request.params.id}` });
});

// create single bootcamp
router.post("/", (request, response) => {
  response.status(200).json({ success: true, message: "Create new bootcamp" });
});

// edit a bootcamp
router.put("/:id", (request, response) => {
  response
    .status(200)
    .json({ success: true, message: `Edit bootcamp ${request.params.id}` });
});

// delete bootcamp
router.delete("/:id", (request, response) => {
  response
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${request.params.id}` });
});

module.exports = router;
