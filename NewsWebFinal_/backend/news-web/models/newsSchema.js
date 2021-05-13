const { model, Schema } = require("mongoose");

const newsSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  publishedAt: {
    type: Date
  },
  imageUrl: {
    type: String
  },
  newsType: {
    type: String
  }
});

module.exports = model("new", newsSchema);
