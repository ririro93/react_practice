import { useState, useEffect } from 'react';

const Review = ({ review }) => {
  //// Movie
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    fetchMovie(review.movie);
  }, [])

  const fetchMovie = async (pk) => {
    const res = await fetch(`http://localhost:8000/api/movies/${pk}`);
    const data = await res.json();

    console.log(data);
    setMovie(data);
  }

  //// Author
  const [author, setAuthor] = useState({});
  useEffect(() => {
    fetchAuthor(review.author);
  }, [])

  const fetchAuthor = async (pk) => {
    const res = await fetch(`http://localhost:8000/api/users/${pk}`);
    const data = await res.json();
    setAuthor(data);
  }

  return (
    <div className="col-6 p-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{movie.title}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rating: {"❤".repeat(review.rating) + "🖤".repeat(5-review.rating)}</li>
          <li className="list-group-item">Author: {review.author}</li>
          <li className="list-group-item">poster</li>
        </ul>
        <div className="card-body">
          <p className="card-text">{review.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
