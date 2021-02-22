const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => res.send('<h1>Speaker List </h1>'));

  router.get('/:shortname', (req, res) => {
    const { shortname } = req.params;

    return res.send(`Name: ${shortname}`);
  });

  return router;
};
