const mongoose = require('mongoose');
const NewsModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const NewsBlog = mongoose.model('News', NewsModel);
module.exports = NewsBlog;