import React, {useState, useEffect} from 'react'
import './App.scss';
import Hamburger from "./Hamburger/hamburger"
import Works from "./Works/works"
import Intro from "./Intro/intro"
import Contact from "./Contact/contact"
import Portfolios from './Portfolios/Portfolios';



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
