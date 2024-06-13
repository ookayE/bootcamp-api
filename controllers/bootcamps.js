const Bootcamp = require("../models/Bootcamps");
const ErrorResponse = require("../Utilities/errorResponse");
const asyncHandler = require("../middleware/async");

//@desc     get all bootcamps
//@route    GET api/v1/bootcamps
//@access   Public
exports.getBootcamps = asyncHandler(async (request, response, next) => {
  const bootcamps = await Bootcamp.find();

  response
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

//@desc     get single bootcamp
//@route    GET api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = asyncHandler(async (request, response, next) => {
  const bootcamp = await Bootcamp.findById(request.params.id);

  // if statement to handle scenario where id is correctly formatted but does not exist
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp not found with id of ${request.params.id}`,
        404
      )
    );
  }

  response.status(200).json({ success: true, data: bootcamp });
});

//@desc     create bootcamp
//@route    POST api/v1/bootcamps/
//@access   Public
exports.createBootcamp = asyncHandler(async (request, response, next) => {
  const bootcamp = await Bootcamp.create(request.body);

  response.status(201).json({
    success: true,
    data: bootcamp,
  });
});

//@desc     edit a bootcamp
//@route    PUT api/v1/bootcamps/:id
//@access   Public
exports.editBootcamp = asyncHandler(async (request, response, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp not found with id of ${request.params.id}`,
        404
      )
    );
  }

  response.status(200).json({ success: true, data: bootcamp });
});

//@desc     delete a bootcamp
//@route    DELETE api/v1/bootcamps/:id
//@access   Public
exports.deleteBootcamp = asyncHandler(async (request, response, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(request.params.id);

  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp not found with id of ${request.params.id}`,
        404
      )
    );
  }

  response.status(200).json({ success: true, data: {} });
});
