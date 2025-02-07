const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Auth = mongoose.models.Auth || mongoose.model("Auth", loginSchema);

module.exports = Auth;
