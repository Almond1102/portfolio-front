import './App.scss';
import React, {useState} from 'react'
import Background from './Background/background';
import Hamburger from "./Hamburger/hamburger"
import Works from "./Works/works"
import Intro from "./Intro/intro"

function App() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className="front-app">
          <div className="section" > 
            <Intro/>
            <Works/>
            <div className="rigth-bottom">
              <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>
          </div>
    </div>
  );
}

export default App;
