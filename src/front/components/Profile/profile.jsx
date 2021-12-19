import React from 'react'
import Badge from '../Badge';
import "./profile.scss"


function Profile() {
    

    return (
        <div className='profile-container'>
            <img className="profile-img" src="img/profile.png"/>
            <div className="hover-container">
                <div className="hover-text">
                    <p>1998-11-02</p>
                    <p>최병주</p>
                    <p>Front end</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
