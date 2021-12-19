import React, {useState} from 'react'
import { KeyboardArrowUp,GitHub} from '@material-ui/icons';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import "./hamburger.scss"

function Hamburger({menuOpen, setMenuOpen}) {


    return (
        <div className={'hamburger ' + (menuOpen &&" active")}>
            <div className={'hamburger-list'}>
                <a href='#intro'><KeyboardArrowUp className='hamburgerlist-icon'/></a>
                <a href="https://github.com/bjc1102"><GitHub className='hamburgerlist-icon'/></a>
                <a href="https://jolly-jacket-396.notion.site/Notion-e0fa297858124ecea1d63103e971b22a"><ArticleIcon className='hamburgerlist-icon'/></a>
                <a href="https://jolly-jacket-396.notion.site/Notion-e0fa297858124ecea1d63103e971b22a"><EditIcon className='hamburgerlist-icon'/></a>
            </div>
            <div className='hamburger-icon' onClick={() => setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>

        </div>
    )
}

export default Hamburger
