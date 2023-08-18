const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/social-network", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose.connection;
