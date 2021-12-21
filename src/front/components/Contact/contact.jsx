import React, {useEffect} from 'react'
import "./contact.scss"

function Contact() {
    
    return (
        <div className='contact'>
            <div className="left">
                <img src="img/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Get In Touch</h2>
                <input type='text' placeholder='Email'/>
                <textarea placeholder="메시지"></textarea>
                <button type='submit'>전송</button>
            </div>
        </div>
    )
}

export default Contact
