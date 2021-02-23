// best practice is separate your code into small organized files
const express = require('express');

const router = express.Router();
// we can get our sever.js messy by import every router into it
// and its gonna work perfectly, but one of the reason to make our modular is
// organize our code by separating our code.

const speakerRouter = require('./speakers');
const feedbackRouter = require('./feedback');

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakerRouter(params));
  router.use('/feedback', feedbackRouter(params));

  return router;
};

// while using this is fine but by choosing the previous, we can add some parameters
// module.export = router;
