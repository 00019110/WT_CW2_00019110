const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title cannot be empty'],
  },
  author: {
    type: String,
    required: [true, 'Author cannot be empty'],
  },
  genre: {
    type: String,
    required: [true, 'Genre cannot be empty'],
  },
  review: {
    type: String,
    required: [true, 'Review cannot be empty'],
    minlength: [15, 'Review should be at least 15 characters long'],
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
