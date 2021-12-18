import React from 'react'
import Badge from '../Badge';
import "./profile.scss"


function Profile() {
    

    return (
        <div className='profile-container'>
            <img className="profile-img" src="img/profile.png"/>
            <h1>최병주</h1>
            <div className='badge-box'>
            </div>
        </div>
    )
}

export default Profile
