versioning your API allows you to update without affecting previous work

/api/v1/bootcamps
/api/v1/courses
/api/v1/reviews
/api/v1/auth
/api/v1/users

Moving routes of out server.js and into routes/bootcamps.js for cleaner code.
THEN moving our responses from bootcamps.js into controllers/bootcamps.js.

Using Morgan with node.js to log middleware

Using a body parser with express:
app.use(express.json());
A body parser in Express processes the incoming request bodies and makes the data available under req.body. It is crucial for handling data sent by clients through forms or JSON payloads.

Mongoose Methods for fetching data:
find() - - retrieve multiple documents from a MongoDB collection
findById() - retrieve a single document from a MongoDB collection
findByIdAndEdit() - edit a document from a MongoDB collection
findByIdAndDelete() - delete a document from a MongoDB collection
