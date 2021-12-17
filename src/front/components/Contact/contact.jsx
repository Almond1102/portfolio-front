import React, {useEffect} from 'react'
import AOS from "aos"
import "./contact.scss"
import 'aos/dist/aos.css';

function Contact() {
    
    useEffect(()=> {
        AOS.init({
            duration : 1000
        });
    })
    
    return (
        <div className='contact-box'>
        </div>
    )
}

export default Contact
