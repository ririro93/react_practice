import { useState, useEffect } from 'react';

const Review = ({ review }) => {
  //// Movie
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    const fetchMovie = async (pk) => {
      const res = await fetch(`http://localhost:8000/api/movies/${pk}`);
      const data = await res.json();
  
      console.log(data);
      setMovie(data);
    }

    fetchMovie(review.movie);
  }, [review])


  //// Author
  const [author, setAuthor] = useState({});
  
  useEffect(() => {
    const fetchAuthor = async (pk) => {
      const res = await fetch(`http://localhost:8000/api/users/${pk}`);
      const data = await res.json();
      setAuthor(data);
    }

    fetchAuthor(review.author);
  }, [review])


  return (
    <div className="col-4 p-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{movie.title}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Rating: {"❤".repeat(review.rating) + "🖤".repeat(5-review.rating)}</li>
          <li className="list-group-item"><img className="w-100" src={movie.poster_path} alt="movie_poster"/></li>
          <li className="list-group-item">Written by: {author.username}</li>
        </ul>
        <div className="card-body">
          <p className="card-text">{review.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
