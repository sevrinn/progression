// import express and other libraries
const express = require('express');
const cors = require('cors');
// configure express server
const app = express();
const port = 8000;

// sets up proper way of sending and recieving data as JSON
// this line defines the type of request coming through the form. makes sure its above the require mongoose
app.use(express.json(), express.urlencoded({extended: true}));


// runs config to connect to mongodb server
require ('./config/mongoose.config');

app.use(cors());

// add routes to listen for 
const UserRoutes = require('./routes/users.routes');
UserRoutes(app);

// start the express server listening
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});


