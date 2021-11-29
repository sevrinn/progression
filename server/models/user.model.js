// require mongoose
const mongoose = require('mongoose');

// define new mo schema. don't forget the timestamps!
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'], 
  },
  email: {
    type: String,
    required:[true, 'Email is required'],
    validate: {
      validator: (val) => /^([\w-.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: 'Please enter a valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [8, "Password myst be at least 8 characters long"]
  }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

module.exports = User;