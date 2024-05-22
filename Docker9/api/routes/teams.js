const express = require('express');
const app = express();
const Team = require('../models/team');

app.get('/', (req, res) => {
  Team.find()
      .then((teams) => res.status(200).send(teams))
      .catch((err) => res.status(500).send(err));
});

module.exports = app;
