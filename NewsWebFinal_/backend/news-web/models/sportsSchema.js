const { model, Schema } = require("mongoose");

const sportsSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  publishedAt: {
    type: Date,
    require: true,
  },
});

module.exports = model("sportsSchema", sportsSchema);
