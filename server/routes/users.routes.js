module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send('This is set up');
  });
};