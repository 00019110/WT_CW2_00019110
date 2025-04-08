// controllers/reviewController.js or wherever this code is
const Review = require('../../models/book_review_db');

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.render('index', { reviews });
  } catch (err) {
    res.status(500).send('Error fetching reviews');
  }
};

// Render new review form
exports.newReviewForm = (req, res) => {
  res.render('new');
};

// Create new review
exports.createReview = async (req, res) => {
  try {
    const { title, author, genre, review } = req.body;
    await Review.create({ title, author, genre, review });
    res.redirect('/');
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errorMessages = Object.values(err.errors).map(e => e.message);

      res.status(400).render('new', {
        errors: errorMessages,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        review: req.body.review,
      });
    } else {
      res.status(500).send('Error creating review');
    }
  }
};



// Render edit review form
exports.editReviewForm = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).send('Review not found');
    res.render('edit', { review });
  } catch (err) {
    res.status(500).send('Error loading edit form');
  }
};

// Update review
exports.updateReview = async (req, res) => {
  const { title, author, genre, review } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { title, author, genre, review },
      {
        runValidators: true,
        new: true,
      }
    );

    res.redirect('/');
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errorMessages = Object.values(err.errors).map(e => e.message);

      res.status(400).render('edit', {
        errors: errorMessages,
        review: {
          _id: req.params.id,
          title,
          author,
          genre,
          review,
        }
      });
    } else {
      res.status(500).send('Error updating review');
    }
  }
};


// Delete review
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting review');
  }
};
