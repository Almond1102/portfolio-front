import React from 'react'
import Badge from '../Badge';
import "./profile.scss"


function Profile() {
    

    return (
        <div className='profile-container'>
            <img src="https://www.jing.fm/clipimg/full/64-649094_computer-mouse-pointer-point-and-click-clip-art.png" alt="cursor" className='img'/>
            <img className="profile-img" src="img/profile.png"/>
            <div className="hover-container">
                <div className="hover-text">
                    <p>1998-11-02</p>
                    <p>최병주</p>
                    <p>Byeong-Ju Choi</p>
                    <p>Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
