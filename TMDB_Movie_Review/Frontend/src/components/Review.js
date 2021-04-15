const Review = ({ review }) => {
  return (
    <div className="col-6 p-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{review.movie}</h3>
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
