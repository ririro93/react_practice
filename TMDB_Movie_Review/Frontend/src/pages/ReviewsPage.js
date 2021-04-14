import { useState, useEffect } from 'react';

const ReviewsPage = () => {
  const [reviewsList, setReviewsList] = useState([])

  // fetch reviews list from django rest API
  const fetchReviews = async () => {
    // const res = await fetch('http://localhost:8000/reviews');
    // const data = await res.json();

    // console.log(data);
    console.log('refresh list');
  }

  return (
    <div className="container">
      <h1>Movie Review List</h1>
      <button onClick={() => fetchReviews()}>refresh reviews list</button>
    </div>
  )
}

export default ReviewsPage
