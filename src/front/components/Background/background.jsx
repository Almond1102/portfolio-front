import React from 'react'
import "./background.css"

function background(props) {
    return (
        <div className='background-container'>
            <div className="stars">
                <div className="twinkling">
                    {props.children}
                </div>
            </div>
        </div>

    )
}

export default background
