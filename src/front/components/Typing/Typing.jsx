import React, {useRef, useEffect} from 'react'
import { init } from 'ityped'
import "./Typing.scss"

function Typing() {

    const myElement = useRef();

    useEffect(()=> {
        init(myElement.current, {
             showCursor: true, 
             strings: [' Developer', ' Designer'],
             backSpeed:  80,
             backDelay:  1500,
            })
    }, [])

    return (
        <div className='typing-box'>
            I want to be a<span ref={myElement}></span>
        </div>
    )
}

export default Typing
