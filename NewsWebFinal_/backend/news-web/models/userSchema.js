const { model, Schema } = require("mongoose");

//Biren
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

module.exports = model("user", userSchema);
