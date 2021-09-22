import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Card from './components/common/card/Card';
import './app.scss';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <div className="cardWrapper">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
