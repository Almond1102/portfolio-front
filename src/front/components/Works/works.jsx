import React, {useEffect} from 'react'
import Profile from "../Profile/profile"
import Info from '../Info/Info'
import Typing from '../Typing/Typing'
import Slider from "../Slider/Slider"
import "./works.scss"

function Works() {

    return (
        <div className="works-box">

            <div className="works-container">
                <div className="works-typing"><Typing/></div>
                <div className="works-flex-container">
                    <div className="image"><Profile/></div>
                    <Info/>
                </div>
                <div className="line"></div>
                <div className="works-info-container">
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default Works
