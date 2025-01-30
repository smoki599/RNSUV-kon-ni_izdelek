var express = require('express')
var router = express.Router();


//   id: number;
//   vsebinaId: number;
//   userId: number;
//   rating: number;
//   comment: string;
const reviews = [
  { id: 1, type: "film", vsebinaId: 1, userId: "Bob", rating: 5, comment: "Amazing movie, highly recommend!" },
  { id: 2, type: "knjiga", vsebinaId: 2, userId: "Alice", rating: 4, comment: "Great book, but the ending felt rushed." },
  { id: 3, type: "knjiga", vsebinaId: 3, userId: "Charlie", rating: 3, comment: "Interesting read, but a bit slow in the middle." },
  { id: 4, type: "film", vsebinaId: 4, userId: "David", rating: 5, comment: "One of the best films I've ever watched!" },
  { id: 5, type: "film", vsebinaId: 1, userId: "Emma", rating: 2, comment: "Didn't really enjoy it, expected more." },
  { id: 6, type: "knjiga", vsebinaId: 2, userId: "Frank", rating: 5, comment: "Masterpiece! Loved every page." },
  { id: 7, type: "knjiga", vsebinaId: 3, userId: "Grace", rating: 4, comment: "Well written and engaging." },
  { id: 8, type: "film", vsebinaId: 4, userId: "Hannah", rating: 3, comment: "It was okay, but not my favorite." },
  { id: 9, type: "film", vsebinaId: 5, userId: "Ian", rating: 4, comment: "Good cinematography and great acting." },
  { id: 10, type: "knjiga", vsebinaId: 2, userId: "Julia", rating: 5, comment: "Couldn't put it down!" },
  { id: 11, type: "film", vsebinaId: 3, userId: "Kevin", rating: 1, comment: "Terrible movie, waste of time." },
  { id: 12, type: "knjiga", vsebinaId: 2, userId: "Laura", rating: 5, comment: "Loved it! One of my all-time favorites." },
  { id: 13, type: "film", vsebinaId: 1, userId: "Michael", rating: 4, comment: "Solid film, good story and characters." },
  { id: 14, type: "knjiga", vsebinaId: 1, userId: "Nina", rating: 3, comment: "Decent book, but not memorable." },
  { id: 15, type: "film", vsebinaId: 4, userId: "Oliver", rating: 5, comment: "10/10 would watch again!" },
  { id: 16, type: "knjiga", vsebinaId: 4, userId: "Peter", rating: 2, comment: "Not my style, struggled to finish it." },
  { id: 17, type: "film", vsebinaId: 1, userId: "Quinn", rating: 4, comment: "A fun and enjoyable movie." },
  { id: 18, type: "knjiga", vsebinaId: 4, userId: "Rachel", rating: 5, comment: "Incredible story, so well written!" },
  { id: 19, type: "film", vsebinaId: 5, userId: "Steve", rating: 3, comment: "Had some good moments, but not great." },
  { id: 20, type: "knjiga", vsebinaId: 3, userId: "Tina", rating: 4, comment: "Would recommend to anyone who likes this genre." }
];


router.get('/', (req, res) => {
  if (req.query.id || req.query.type) {
    const id = parseInt(req.query.id);
    const foundreviews = reviews.filter(
       (rewiew) => rewiew.vsebinaId === id && rewiew.type === req.query.type);
    return res.status(200).json(foundreviews);
  }
  return res.status(400).json(reviews);
});

router.post('/', (req, res) => {
  console.log("arrived",req.body);
  const { vsebinaId, type, userId, rating, comment } = req.body;
  //console.log(!vsebinaId , !userId , !rating , comment === undefined)

  if (!vsebinaId || !userId || !rating || comment === undefined) {
    return res.status(400).json({ msg: 'Invalid review payload' });
  }

  const foundReview = reviews.find(
    (review) => review.vsebinaId === vsebinaId && review.userId === userId && review.type === type
  );

  if (foundReview) {
    return res.status(400).json({ msg: 'Review already exists' });
  }
  console.log(reviews);
  const newReview = {
    id: reviews.length + 1,
    type,
    vsebinaId,
    userId,
    rating,
    comment,
  };

  reviews.push(newReview);
  console.log(reviews);
  return res.status(201).json({ msg: 'Review added successfully', newReview });
});


router.patch('/:id', (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  const foundReview = reviews.find((review) => review.id === reviewId);

  if (foundReview) {
    // Allow updating `rating` and `comment`
    const { rating, comment } = req.body;
    if (rating !== undefined) foundReview.rating = rating;
    if (comment !== undefined) foundReview.comment = comment;

    return res.status(200).json({ msg: 'Review updated successfully', review: foundReview });
  }

  return res.status(404).json({ msg: `Review with ID ${reviewId} not found` });
});

module.exports = router;