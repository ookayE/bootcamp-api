const Bootcamp = require("../modals/Bootcamps");

//@desc     get all bootcamps
//@route    GET api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (request, response, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    response
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    response.status(400).json({ success: false });
  }
};

//@desc     get single bootcamp
//@route    GET api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (request, response, next) => {
  try {
    const bootcamp = await Bootcamp.findById(request.params.id);

    // if statement to handle scenario where id is correctly formatted but does not exist
    if (!bootcamp) {
      return response.status(400).json({ success: false });
    }

    response.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    response.status(400).json({ success: false });
  }
};

//@desc     create bootcamp
//@route    POST api/v1/bootcamps/
//@access   Public
exports.createBootcamp = async (request, response, next) => {
  try {
    const bootcamp = await Bootcamp.create(request.body);

    response.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    // Log the error message for debugging purposes
    console.error(error);

    response.status(400).json({
      success: false,
      message: error.message, // Use the actual error message
      errors: error.errors || {}, // Include specific validation errors if available
    });
  }
};

//@desc     edit a bootcamp
//@route    PUT api/v1/bootcamps/:id
//@access   Public
exports.editBootcamp = async (request, response, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!bootcamp) {
      return response.status(400).json({ success: false });
    }

    response.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    response.status(400).json({ success: false });
  }
};

//@desc     delete a bootcamp
//@route    DELETE api/v1/bootcamps/:id
//@access   Public
exports.deleteBootcamp = async (request, response, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(request.params.id);

    if (!bootcamp) {
      return response.status(400).json({ success: false });
    }

    response.status(200).json({ success: true, data: {} });
  } catch (error) {
    response.status(400).json({ success: false });
  }
};
