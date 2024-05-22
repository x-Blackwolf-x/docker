const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const mongoURI = 'mongodb://db:27017/nba';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(mongoURI, options)
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log(err));
const teams = require('./routes/teams');
app.use(express.json());
app.use('/teams', teams);
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
