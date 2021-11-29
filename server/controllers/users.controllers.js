
const User = require('../models/user.model')

const getAllUsers = (req, res) => {
  User.find()
  .then((allUsers) => res.json({ users: allUsers }))
  .catch((err) => res.json({ errMsg: err }))
};

const addNewUser = (req, res) => {
  console.log("in new user")
  const { body } = req;
  User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    username: body.username,
    email: body.email,
    password: body.password
  })
  .then((newUser) => res.json({newUser: newUser}))
  .catch((err) => res.json({errorMessage: err}));
}

const getUserById = (req, res) => {
  console.log(req.params.userId)
  User.findOne({ _id: req.params.userId })
  .then((user) => res.json({user: user}))
  .catch((err) => res.send(err))
}

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById
};