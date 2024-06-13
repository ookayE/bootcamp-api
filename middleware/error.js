const ErrorResponse = require("../Utilities/errorResponse");

const errorHandler = (error, request, response, next) => {
  let customError = { ...error };

  error.message = error.message;

  // Log to console for developer
  console.log(error);

  // Mongoose bad ObjectId
  if (error.name === "CastError") {
    const message = `Resource not found with with id of ${error.value}`;
    customError = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (error.code === 11000) {
    const message = "Duplicate field value entered";
    customError = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((value) => value.message);
    const message = `Validation Error: ${messages.join(", ")}`;
    customError = new ErrorResponse(message, 400);
  }

  response.status(customError.statusCode || 500).json({
    success: false,
    error: customError.message || "Server error",
  });
};

module.exports = errorHandler;
