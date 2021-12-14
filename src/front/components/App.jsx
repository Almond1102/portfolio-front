import './App.css';
import React from 'react'
import Background from './Background/background';
import FixedNav from "./FixedNav/fixednav"
import Works from "./Works/works"
import Intro from "./Intro/intro"

function App() {


  return (
    <div className="front-app">
          <div className="section" > 
            <Intro/>
            <Works/>
          </div>
    </div>
  );
}

export default App;
