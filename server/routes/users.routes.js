const UserController = require('../controllers/users.controllers');

module.exports = (app) => {
  app.get('/api/user/:userId', UserController.getUserById);
  app.get('/api/user', UserController.getAllUsers);
  app.post('/api/user', UserController.addNewUser);
  
};