import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss"
import Badge from "../Badge/index"
import { useState } from 'react';

function Slider() {
    const [currentSlide , setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") 
            currentSlide !== 0 && setCurrentSlide(currentSlide - 1)  
        else if(direction === "right")
            currentSlide !== 2 && setCurrentSlide(currentSlide + 1)
    }

    const arrowClick = () => {
        if (currentSlide === 0) {
            return <ArrowForwardIosIcon className='arrow right' fontSize='large'  onClick={()=>handleClick("right")}/> 
        }
        if (currentSlide === data.length-1) {
            return <ArrowBackIosIcon className='arrow left' fontSize='large' onClick={()=>handleClick("left")}/>
        }
        else {
            return <><ArrowBackIosIcon className='arrow left' fontSize='large' onClick={()=>handleClick("left")}/> 
                    <ArrowForwardIosIcon className='arrow right' fontSize='large'  onClick={()=>handleClick("right")}/></>
        }
    }
    const pageLink = (title, link) => {
        if(link)
            return <a href={link} target='_blank'>{title}</a>
        else 
            return title
    }
    
    const date = new Date();
    const data= [
        {
            id : 1,
            title : "학습용 노션(Notion)",
            contents : "프론트와 관련된 내용 뿐만 아니라 백엔드, 디자인까지 여러가지 공부한 것들을 기록하고 정리하고 있습니다",
            iconimg : "https://img.icons8.com/ios/500/notion.png",
            link : "https://jolly-jacket-396.notion.site/Notion-e0fa297858124ecea1d63103e971b22a",
            sliderimg : "img/Notion.PNG"
        }, 
        {
            id : 2,
            title : "기술 스택(tech stack)",
            contents : "관련 전공을 통해 기존의 것들을 공부하는 것 뿐만 아니라 새로운 기술을 익히기 위해 노력하고 있습니다",
            iconimg : "https://cdn2.iconfinder.com/data/icons/business-2-39/128/143-512.png",
            link : false,
            sliderimg : false
        }, 
        {
            id : 3,
            title : "이력서(resume)",
            contents : "배운 것들을 잘 정리하기 위해 최대한 수정하고 있습니다",
            iconimg : "https://cdn4.iconfinder.com/data/icons/online-course-2/512/resume-degree-job-applicant-512.png",
            link : "https://jolly-jacket-396.notion.site/Basic-resume-ebe615df4bdd4bfe8770a4f2d8d32258",
            sliderimg : "img/resume.PNG"
        }
    ];

    const renderImg = (img) => {
        if(img) { 
            return <img src={img} alt="content img" />
        }
        else {
            return <div className='badgeContainer'><Badge/></div>
        }
    }

    return (
        <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            {data.map(d => (
            <div key={d.id} className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.iconimg} alt="sliderimg" />
                            </div>
                            <h2>{pageLink(d.title, d.link)}</h2>
                            <p>{d.contents}</p>
                            <span>최근 업데이트 : {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}</span>
                        </div>
                    </div>
                    <div className="right">
                        {renderImg(d.sliderimg)}
                    </div>
                </div>
                {arrowClick()}
            </div>))}

        </div>
    )
}

export default Slider
