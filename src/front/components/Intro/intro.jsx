import React, { useEffect } from 'react'
import AOS from "aos";
import "./intro.scss"


function Intro() {

    useEffect(()=> {
        AOS.init();
    }, [])

    return (
        <div className='intro-box' id="intro">
            DHDHDHD
        </div>
    )
}

export default Intro
