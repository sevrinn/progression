
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

const updateUser = (req, res) => {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true, runValidators: true})
  .then((updatedUser) => res.json(updatedUser))
  .catch((err) => res.send(err))
}

const deleteUser = (req, res) => {
  User.findOneAndDelete({_id: req.params.userId})
  .then((deleteUser) => res.json(deleteUser))
  .catch((err) => res.json(err))
}

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById,
  updateUser,
  deleteUser
};