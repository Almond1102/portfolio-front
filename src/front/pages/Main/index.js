import React from 'react'
import Banner from "../../components/Banner/index"
import Profile from '../../components/Profile/index';
import './index.css';

function Main() {
    return (
        <div className="main_box">
            <img className="main-img" src="img/trees-gdbe9a52dd_1920.jpg"/>
            <div className="main_profile">
                <Profile/>
            </div>
            <div className="main_contents">
                <Banner/>
            </div>
        </div>
    )
}

export default Main
