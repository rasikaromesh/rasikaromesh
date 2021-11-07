import Topbar from './components/topbar/Topbar';
import BlogPost from './components/blogPost/BlogPost';
import MainPage from './components/MainPage/MainPage';
import CarouselComponent from './components/carousel/CarouselComponent';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <div className="section">
        <Router>
          <Switch>
            <Route path="/photos/carousel">
              <CarouselComponent />
            </Route>
            <Route path="/post/:id">
              <BlogPost />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
