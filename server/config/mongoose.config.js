// require mongoose
const mongoose = require('mongoose');

// declare dbName
const dbName = "userDB";

// connect to mongodb server
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> {
  console.log(`Successfully connected to ${dbName} database!`);
})
// eslint-disable-next-line no-unused-vars
.catch((err) => {
  console.log(`There was an error connecting to the ${dbName} database:(`)
})