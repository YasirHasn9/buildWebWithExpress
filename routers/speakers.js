const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const data = params.fetchingSpeakersData;
  router.get('/', async (req, res) => {
    const speakers = await data.getData();

    return res.json(speakers);
  });

  router.get('/:shortname', (req, res) => {
    const { shortname } = req.params;

    return res.send(`Name: ${shortname}`);
  });

  return router;
};
