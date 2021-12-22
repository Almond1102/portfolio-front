import React, {useEffect} from 'react'
import EmailIcon from '@mui/icons-material/Email';
import "./contact.scss"

function Contact() {
    
    return (
        <div className='contact'>
            <div className="custom-shape-divider-top-1640072724">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1640072826">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <div className='container'>
                <div className="left">
                    <h2>Contact</h2>
                    <p> 현재 좋은 기회를 찾아보고 있습니다! 또한 제 이메일과 연락함은 항상 열려 있으니 질문이 있거나 인사를 해주신다면 최선을 다해 답변해 드리겠습니다!</p>
                </div>
                <div className="right">
                    <div className="title"><EmailIcon fontSize='large'/><h2>Get In Touch</h2></div>
                    <form>
                        <input type='email' placeholder='Your Email'/>
                        <textarea placeholder="Message"></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
