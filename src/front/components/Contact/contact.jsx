import React, {useEffect} from 'react'
import EmailIcon from '@mui/icons-material/Email';
import "./contact.scss"

function Contact() {
    
    return (
        <div className='contact'>
            <div class="custom-shape-divider-top-1640072724">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-bottom-1640072826">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        class="shape-fill"></path>
                </svg>
            </div>
            <div className='container'>
                <div className="left">
                    <p></p>
                </div>
                <div className="right">
                    <div className="title"><EmailIcon fontSize='large'/><h2>Get In Touch</h2></div>
                    <form>
                        <input type='text' placeholder='Your Email'/>
                        <textarea placeholder="Message"></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
