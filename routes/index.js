exports.createReview = (req, res) => {
    const { title, author, genre, content } = req.body;
    reviews.push({ id: nextId++, title, author, genre, content });
    res.redirect('/'); // <-- this is the key line!
  };
  