const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviews');
const Review = require('../models/book_review_db');

// Show all reviews
router.get('/', reviewController.getAllReviews);

// Form to add a new review
router.get('/new', reviewController.newReviewForm);

// Submit a new review
router.post('/new', reviewController.createReview);

// Form to edit a review
router.get('/edit/:id', reviewController.editReviewForm);

// Submit edited review
router.post('/edit/:id', reviewController.updateReview);

// Delete a review
router.post('/delete/:id', reviewController.deleteReview);

module.exports = router;
