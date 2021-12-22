import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.scss"

function Intro() {
    

    return (
        <div className='intro-box' id="intro">
            <div className="intro-text-box">
                <div                 
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic">
                    <div><p className='left'>Hi, my name is</p></div>
                    <div><h2 id="intro-2">Byeong-Ju Choi</h2></div>
                </div>

                <div data-aos="zoom-up"><p className="center">and</p></div>
                <div data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic">
                    <div>
                        <h2 id="intro-3">
                            it's Choi Portfolio</h2>
                    </div>
                    <div>
                        <p className='right'>Frontend</p>
                    </div>
                </div>
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
