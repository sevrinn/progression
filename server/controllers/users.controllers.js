
const User = require('../models/user.model')

// controller function to add new user to user database
const addNewUser = (req, res) => {
  console.log("in new user")
  // destructrures body from req
  const { body } = req;
  // create() must be fed an object whose keys MUST match 
  // with the field names in the model
  User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    username: body.username,
    email: body.email,
    password: body.password
  })
  // send json response to client with new user that was just added
  .then((newUser) => res.json({newUser: newUser}))
  .catch((err) => {
    // if there is an error in db query, send status of 400 and json response w/ error msg
    res.status(400).json({errorMessage: err})
  });
};

// controller function that queries all users
const getAllUsers = (req, res) => {
  // find() gets all docs from db
  User.find()
  // send json response with all users to client
  .then((allUsers) => res.json({ users: allUsers }))
  .catch((err) => {
    res.status(400).json({ errMsg: err })
  });
};

// controller function that queries a single restaurant by its id
const getUserById = (req, res) => {
  console.log(req.params.userId)
  // findOne() takes obj as arg {queryField: queryVal}
  User.findOne({ _id: req.params.userId })
  // if successfull return json response to client w/ user info
  .then((user) => res.json({user: user}))
  // if there's an error in db query, send status 400 and json response w/ error msg
  .catch((err) => {
    res.status(400).send({errMsg: err})
  });
};


// controller to update user
const updateUser = (req, res) => {
  // findeOneAndUpdate takes 1st arg: {queryField: queryVal}, 2nd arg: the fields to update 
  // (req.body contains form data as an object)
  // 3rd arg: settings. new: true means we want updated doc supplied in arg in .then promise block
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true, runValidators: true})
  // if successful send json response w/ updated user
  .then((updatedUser) => res.json(updatedUser))
  // if there's an error in query, send status 400 and json response w/ error msg
  .catch((err) => {
    res.status(400).send(err)
  });
};

// controller to delete user
const deleteUser = (req, res) => {
  // findOneAndDelete takes object as arg {queryField: queryVal}
  User.findOneAndDelete({_id: req.params.userId})
  // if successful send 200 status code and message user deleted
  .then((deleteUser) => {
    res.status(200).json(deleteUser).send("User Deleted")
  })
  .catch((err) => res.json(err))
}

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById,
  updateUser,
  deleteUser
};