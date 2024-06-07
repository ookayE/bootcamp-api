versioning your API allows you to update without affecting previous work

/api/v1/bootcamps
/api/v1/courses
/api/v1/reviews
/api/v1/auth
/api/v1/users

Moving routes of out server.js and into routes/bootcamps.js for cleaner code.
THEN moving our responses from bootcamps.js into controllers/bootcamps.js.

Using Morgan with node.js to log middleware
