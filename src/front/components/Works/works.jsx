import React, {useEffect} from 'react'
import Profile from "../Profile/profile"
import Info from '../Info/Info'
import Typing from '../Typing/Typing'
import "./works.scss"

function Works() {

    return (
        <div className="works-box">
            <img className="works-box-img-left"src="img/wavesOpacity.svg"/>
            <img className="works-box-img-right"src="img/wavesOpacity.svg"/>
            <div className="works-container">
                <div className="works-typing"><Typing/></div>
                <div className="works-flex-container">
                    <Profile/>
                    <Info/>
                </div>
                <div className="works-info-container">
                    HIHIHIHI
                </div>
            </div>
        </div>
    )
}

export default Works
