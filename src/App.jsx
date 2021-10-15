import Topbar from './components/common/topbar/Topbar';
import BlogPost from './components/blogPost/BlogPost';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/common/footer/Footer';
import Editor from './components/editor/Editor';
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
            <Route path="/editor">
              <Editor />
            </Route>
            <Route path="/post/:id">
              <BlogPost />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
