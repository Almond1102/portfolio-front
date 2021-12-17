import React, { useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.scss"

function Intro() {
    return (
        <div className='intro-box' id="intro">
            <div className="intro-text-box">
                <div data-aos="fade-right"><h1 id="intro-1">Hello</h1></div>
                <div data-aos="fade-right"><h1  id="intro-2">it's</h1></div>
                <div data-aos="fade-right"><h1  id="intro-3"> Choi Portfolio</h1></div>
            </div>
            <div className="intro-icon">
                <p>scroll down</p>
                <KeyboardArrowDownIcon fontSize='large'/>
            </div>
        </div>
    )
}

export default Intro
