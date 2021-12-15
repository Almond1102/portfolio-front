import React from 'react'
import { KeyboardArrowUp,  GitHub} from '@material-ui/icons';
import "./hamburger.scss"

function hamburger({menuOpen, setMenuOpen}) {
    return (
        <div className={'hamburger ' + (menuOpen &&" active")}>
            <div className={'hamburger-list'}>
                <a id="top"href="#intro"><KeyboardArrowUp/></a>
                <a href="https://github.com/bjc1102"><GitHub/></a>
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
