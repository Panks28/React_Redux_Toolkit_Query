const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

// const dataSchema = new mongoose.Schema({
//   email: {
//     required:true,
//     type: String
//   },
//   username: {
//     required: true,
//     type: String,
//   },
//   password: {
//     required: true,
//     type: String,
//   },
// });

module.exports = mongoose.model("Data", dataSchema);
