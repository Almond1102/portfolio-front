import React from 'react'
import { useState } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import "./portfolios.scss"

function Portfolios() {
    const [selected, setSelected] = useState("featured");
    const list = [
    {
        id : "featured",
        title: "Featured"
    },
    {
        id: "web",
        title : "Web App"
    },
    {
        id: "mobile",
        title : "Mobile App"
    },
    {
        id: "design",
        title : "Design App"
    },
    {
        id: "content",
        title : "Content"
    }
    ]

    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
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
                <div className="item">
                    <img src="https://media.vlpt.us/images/ghdtjrrl94/post/8e62dd50-e6ee-4588-bb07-71a3e0914c28/project-planning-header@2x.png" alt="project" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://media.vlpt.us/images/ghdtjrrl94/post/8e62dd50-e6ee-4588-bb07-71a3e0914c28/project-planning-header@2x.png" alt="project" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://media.vlpt.us/images/ghdtjrrl94/post/8e62dd50-e6ee-4588-bb07-71a3e0914c28/project-planning-header@2x.png" alt="project" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://media.vlpt.us/images/ghdtjrrl94/post/8e62dd50-e6ee-4588-bb07-71a3e0914c28/project-planning-header@2x.png" alt="project" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://media.vlpt.us/images/ghdtjrrl94/post/8e62dd50-e6ee-4588-bb07-71a3e0914c28/project-planning-header@2x.png" alt="project" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://media.vlpt.us/images/ghdtjrrl94/post/8e62dd50-e6ee-4588-bb07-71a3e0914c28/project-planning-header@2x.png" alt="project" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolios
