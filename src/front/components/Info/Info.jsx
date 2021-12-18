import React from 'react'
import "./Info.scss"
import { GitHub } from '@material-ui/icons';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';

function Info() {
    return (
        <div className='info-container'>
            <div className="info-button"><EmailIcon/><span>bjc1102@naver.com</span></div>
            <a href='https://github.com/bjc1102' target='_blank'><div className="info-button"><GitHub/><span>MY GITHUB</span></div></a>
            <a href='https://jolly-jacket-396.notion.site/Notion-e0fa297858124ecea1d63103e971b22a'  target='_blank'><div className="info-button"><EditIcon/><span>Notion</span></div></a>
            <a><div className="info-button"><ArticleIcon/><span>Post</span></div></a>
        </div>
    )
}

export default Info
