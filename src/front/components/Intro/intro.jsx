import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.scss"

function Intro() {
    

    return (
        <div className='intro-box' id="intro">
            <div className="intro-text-box">
                <div data-aos="fade-right"><p className='left'>Hi, my name is</p></div>
                <div data-aos="fade-right"><h2 id="intro-2">Byeong-Ju choi</h2></div>
                <div data-aos="zoom-up"><p className="center">and</p></div>
                <div data-aos="fade-left"><h2 id="intro-3"> it's Choi Portfolio</h2></div>
                <div data-aos="fade-left"><p className='right'>Frontend</p></div>
                <div className='navigation'>
                    <p>scroll down</p>
                    <p>4 page</p>
                    <KeyboardArrowDownIcon fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default Intro
