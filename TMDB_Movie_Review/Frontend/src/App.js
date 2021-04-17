import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// // Pages
// Accounts
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Reviews
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
import AddReviewPage from './pages/AddReviewPage';

// Components
import Navbar from './components/Navbar';

// Main App
const App = () => {
  // Accounts
  const [userInfo, setUserInfo] = useState({
    loggedIn: false,
    email: "asdf@gmail.com",
    accessToken: "",
    refreshToken: ""
  });

  return (
    <Router>
      {/* Header */}
      <Navbar userInfo={userInfo} />

      {/* Home */}
      <Route path='/' exact component={HomePage} />

      {/* Accounts */}
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />

      {/* Reviews */}
      <Route path='/reviews' component={ReviewsPage} />
      <Route path='/add-review' component={AddReviewPage} />

      {/* Footer - to be added*/}
    </Router>
  );
}

export default App;
