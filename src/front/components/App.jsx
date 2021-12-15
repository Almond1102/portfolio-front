import React, {useState} from 'react'
import './App.scss';
import Hamburger from "./Hamburger/hamburger"
import Works from "./Works/works"
import Portfolios from "./Portfolios/portfolios"
import Intro from "./Intro/intro"
import Contact from "./Contact/contact"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="front-app">
      <div className="sections" > 
        <Intro/>
        <Works/>
        <Portfolios/>
        <Contact/>
      </div>
      <div className="rigth-bottom">
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </div>
  );
}

export default App;
