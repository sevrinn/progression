// require mongoose
const mongoose = require('mongoose');

// declare dbName
const dbName = "userDB";

// connect to mongodb server
//we feed it a string of the url where mongodb server is running (wont work if it aint running)
mongoose.connect(`mongodb://localhost/${dbName}`, {
  // pass these in to get rid of deprecation messages in our terminal
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// .connect is a promise so it needs .then.catch
.then(()=> {
  console.log(`Successfully connected to ${dbName} database!`);
})
// eslint-disable-next-line no-unused-vars
.catch((err) => {
  console.log(`There was an error connecting to the ${dbName} database!`);
})