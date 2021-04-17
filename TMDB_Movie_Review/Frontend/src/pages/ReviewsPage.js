import { useState, useEffect } from 'react';

import Review from '../components/Review';

const ReviewsPage = () => {

  //// Reviews
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchAndSetReviews();
  }, []);

  // fetch reviews list from django rest API
  const fetchAndSetReviews = async () => {
    const res = await fetch('http://localhost:8000/api/reviews');
    const data = await res.json();

    console.log(data);
    setReviews(data);
  }

  return (
    <div className="container">
      <h1>Movie Review List</h1>
      <button className="m-3" onClick={fetchAndSetReviews}>refresh reviews list</button>
      <div className="row">
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewsPage
