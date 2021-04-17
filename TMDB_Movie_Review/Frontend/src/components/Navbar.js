import { Link } from 'react-router-dom';

const Navbar = ({ userInfo }) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex">
          <Link className="nav-link text-decoration-none text-light p-0 me-4" to="/">TMDB Movie Review</Link> 
          <Link className="nav-link text-decoration-none text-light p-0 me-4" to="/reviews">Reviews</Link> 
          <Link className="nav-link text-decoration-none text-light p-0 me-4" to="/add-review">Add Review</Link> 
        </div>

        {/* login, logout */}
        {userInfo.loggedIn ?
          (<div className="d-flex dropdown">
            <Link className="nav-link text-decoration-none text-light dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {userInfo.email}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>Profile</li>
              <li>My Reviews</li>
              <li>Signout</li>
            </ul>
          </div>) :
          (<div className="d-flex">
            <Link className="nav-link text-decoration-none text-light" to="/login">
              Login
            </Link>
            <Link className="nav-link text-decoration-none text-light" to="/signup">
              Signup
            </Link>
          </div>)
        }
      </div>
    </nav> 
    </>
  )
}

export default Navbar
