import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
import AddReviewPage from './pages/AddReviewPage';

// Components
import Navbar from './components/Navbar';

// Main App
const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={HomePage}/>
      <Route path='/reviews' component={ReviewsPage}/>
      <Route path='/add-review' component={AddReviewPage}/>
    </Router>
  );
}

export default App;
