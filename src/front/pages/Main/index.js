import React from 'react'
import Banner from "../../components/Banner/index"
import Profile from '../../components/Profile/index';
import './index.css';

function Main() {
    return (
        <div className="main_box">
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
