import Topbar from './components/common/topbar/Topbar';
import BlogPost from './components/blogPost/BlogPost';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/common/footer/Footer';
import EditorComponent from './components/EditorComponent/EditorComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Router>
          <Switch>
            <Route path="/editor">
              <EditorComponent />
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
