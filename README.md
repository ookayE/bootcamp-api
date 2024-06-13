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

Using asyncHandler.js to tidy up controller and make code more readable, concise, and more maintainable.

Slug: Part of a URL that uniquely identifies a particular page on a website in a human-readable format. It typically consists of a few words separated by hyphens and is derived from the title or content of the page. The primary purposes of slugs are to improve readability, enhance SEO (Search Engine Optimization), and provide a user-friendly way to navigate and share URLs.

Using slugify for improved SEO, better user experience, stable and descriptive URLs, efficient content management, and easier analytics tracking

Creating seeder.js to manage data in Mongo DB. Right now it quickly deletes/imports json data found in data/bootcamps.json

    -fs stands for "File System" and is a built-in module in Node.js. It provides a variety of functions to interact with the file system, allowing you to read from, write to, and manipulate files and directories on your operating system.
