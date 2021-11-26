// import express and other libraries
const express = require('express');

// configure express server
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configure mongoose to connect
require ('./config/mongoose.config');

// add routes to listen for 
// UNCOMMENT WHEN CREATED, BIIIIIIISH!!!!!!!!
// const userRoutes = require('./routes/user.routes');
// userRoutes(app);

// star the app server listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


