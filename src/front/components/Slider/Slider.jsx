import React from 'react'
import LaptopIcon from '@mui/icons-material/Laptop';
import "./Slider.scss"

function Slider() {
    return (
        <div className='slider'>
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="lefContainer">
                                <LaptopIcon/>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </div>
    )
}

export default Slider
