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
                <div className="works-slide">
                    <Slider/>
                </div>
                <h2 className='work-mobile'>PC에서 보시는 것을 권장드립니다</h2>
            </div>
        </div>
    )
}

export default Works
