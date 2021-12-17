import React, { useEffect } from 'react'
import AOS from "aos";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./intro.scss"
import 'aos/dist/aos.css';

function Intro() {

    useEffect(()=> {
        AOS.init({duration : 5000});
    }, [])

    return (
        <div className='intro-box' id="intro">
            <div data-aos="fade-right"><h1 id="intro-1">Hello</h1></div>
            <div data-aos="fade-right"><h1  id="intro-2">it's</h1></div>
            <div data-aos="fade-right"><h1  id="intro-3"> Choi Portfolio</h1></div>
            <KeyboardArrowDownIcon fontSize='large' className="intro-icon"/>
        </div>
    )
}

export default Intro
