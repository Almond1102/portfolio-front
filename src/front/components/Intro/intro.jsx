import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.scss"

function Intro() {
    
    const [textAttach, settextAttach] = useState(false);

    useEffect(()=> {
        setTimeout(()=> settextAttach(true), 3000);
    }, [])

    return (
        <div className='intro-box' id="intro">
            {textAttach && <div className='intro-text'><span className='intro-text-attch' data-aos="zoom-in-up">front-end</span></div>}
            <div className="intro-text-box">
                <div data-aos="fade-right"><h1 id="intro-1">Hello</h1></div>
                <div data-aos="fade-right"><h1 id="intro-2">it's</h1></div>
                <div data-aos="fade-right"><h1 id="intro-3"> Choi Portfolio</h1></div>
            </div>
            <div className="intro-icon">
                <p>scroll down</p>
                <KeyboardArrowDownIcon fontSize='large'/>
            </div>
        </div>
    )
}

export default Intro
