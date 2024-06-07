//@desc     get all bootcamps
//@route    GET api/v1/bootcamps
//@access   Public
exports.getBootcamps = (request, response, next) => {
  response.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
};

//@desc     get single bootcamp
//@route    GET api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (request, response, next) => {
  response
    .status(200)
    .json({ success: true, message: `Get bootcamp ${request.params.id}` });
};

//@desc     create bootcamp
//@route    POST api/v1/bootcamps/
//@access   Public
exports.createBootcamp = (request, response, next) => {
  response.status(200).json({ success: true, message: "Create new bootcamp" });
};

//@desc     edit a bootcamp
//@route    PUT api/v1/bootcamps/:id
//@access   Public
exports.editBootcamp = (request, response, next) => {
  response
    .status(200)
    .json({ success: true, message: `Edit bootcamp ${request.params.id}` });
};

//@desc     delete a bootcamp
//@route    DELETE api/v1/bootcamps/:id
//@access   Public
exports.deleteBootcamp = (request, response, next) => {
  response
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${request.params.id}` });
};
