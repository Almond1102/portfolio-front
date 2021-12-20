import React from 'react'
import Badge from '../Badge';
import "./profile.scss"


function Profile() {
    

    return (
        <div className='profile-container'>
            <div className="pointer">
                <img src="https://www.pngrepo.com/download/301378/cursor-click.png" alt="cursor" />
            </div>
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
