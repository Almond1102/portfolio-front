import React from 'react'
import Badge from '../Badge';
import "./index.css"


function Profile() {


    return (
        <div className="profile-box">
            <div>
                <img className="profile-img" src="img/profile.png"/>
            </div>
            <div className="profile-text">
                <h2 id="name">최병주</h2>
                <h3 id="engName">( Byeong-Ju Choi )</h3>
            </div>
            <div className="profile-badgeBox">
                <Badge/>
            </div>
            <div className="profile-linkBox">
                <hr className="linkBox-line"/>
                <div>
                    <h3>Contact Me</h3>
                </div>
                <p><img className="profile-email" src="img/mail_email_message_electronic_online_web_icon-icons.com_59986.png"/><span id="email-text">bjc1102@naver.com</span></p>
                <a target="_blank"href="https://github.com/Badug-i"><img src="https://img.shields.io/badge/My GitHub-181717?style=social&logo=GitHub&logoColor=Black"/></a>
            </div>
        </div>
    )
}

export default Profile
