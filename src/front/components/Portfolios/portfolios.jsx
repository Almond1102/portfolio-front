import React, { useEffect } from 'react'
import { useState } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import "./portfolios.scss"
import {
    ReactPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../../data"

function Portfolios() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState("featured");

    const list = [
    {
        id : "react",
        title: "React"
    },
    {
        id: "web",
        title : "Web"
    },
    {
        id: "mobile",
        title : "Mobile"
    },
    {
        id: "design",
        title : "Design"
    },
    ]

    useEffect(()=> {
        switch(selected) {
            case "react" : setData(ReactPortfolio);
            break;
            case "web" : setData(webPortfolio);
            break;
            case "mobile" : setData(mobilePortfolio);
            break;
            case "design" : setData(designPortfolio);
            break;
            default:
                setData(ReactPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <div className="line"></div>
            <ul>
                {list.map((item, index)=>(
                    <PortfolioList 
                    key={index}
                    id={item.id}
                    title={item.title} 
                    active={selected===item.id}
                    setSelected={setSelected}
                     />
                ))}
            </ul>
            <div className="container">
                {/* {data.map((d, index)=> 
                <div key={index} className="item">
                    <img src={d.img} alt="project" />
                    <div className='contents'>
                        <h3>{d.title}</h3>
                        <p>{d.content}</p>
                    </div>
                </div>
                )} */}
            </div>
        </div>
    )
}

export default Portfolios
