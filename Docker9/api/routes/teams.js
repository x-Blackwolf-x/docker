const express = require('express');
const app = express();
const Team = require('../models/team');

app.get('/', (req, res) => {
  Team.find({})
      .then((teams) => res.status(200).send(teams))
      .catch((err) => res.status(500).send(err));
});
app.post('/', (req, res) => {
  const team = new Team(req.body);
  team.save()
      .then(() => res.status(201).send(teams))
      .catch((err) => res
          .status(400)
          .send(err));
});
module.exports = app;
