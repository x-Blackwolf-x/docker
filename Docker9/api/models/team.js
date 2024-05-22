const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema(
  {
    name: String,
    city: String
  },
  {
    versionKey: false,
    collection: 'teams'
  }
);
module.exports = mongoose.model('Team', TeamSchema);
