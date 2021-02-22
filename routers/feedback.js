const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('<h1>Feedback</h1>'));

  router.post('/', (req, res) => res.send('Feedback form posted'));

  return router;
};
