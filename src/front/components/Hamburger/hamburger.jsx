import React from 'react'
import { Menu } from '@material-ui/icons';
import "./hamburger.scss"

function hamburger({menuOpen, setMenuOpen}) {
    return (
        <div className={'hamburger ' + (menuOpen &&" active")}>
            <div className='hamburger-list'>
                <a href="#intro">Home</a>
                <a href="https://github.com/bjc1102">GitHub</a>
                <a href="#intro">Home</a>
            </div>
            <div className='hamburger-icon' onClick={() => setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>

        </div>
    )
}

export default hamburger
