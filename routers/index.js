// best practice is separate your code into small organized files
const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  return router;
};

// while using this is fine but by choosing the previous
// module.export = router;
