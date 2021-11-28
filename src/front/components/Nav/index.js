import React from 'react'
import { Link } from "react-router-dom";
import "./index.css"
import { useState, useEffect } from "react";

function Nav() {

    const [nowLink, setnowLink] = useState();
    const [show, setShow] = useState(false);
    let moved = () => {
        if(window.scroll > 100)
            setShow(true);
        else
            setShow(false);
    }

    useEffect(()=> {
        window.addEventListener("scroll", moved)
    }, [])


    let link = [{"About" : "소개"} , {"Portfolio" : "포트폴리오"} ,  {"Post" : "포스트"}];



    
    const openLink = async (index) => {
        setnowLink(index);
    };

    const linkList = link.map((linked, index) => <Link key={index} onClick={() => openLink(index)} className={`nav_link ${nowLink === index && "underline"}`}  to={`/${Object.keys(linked)}`}>
        <li>{`${Object.values(linked)}`}</li></Link>)

    return (
        <div className={`Navbar ${moved && "Navbar_white"}`}>
            <div className="navbar_logo">
                {<Link onClick={() => openLink(null)} to="/"><img className="logo_image" src="img/sale.png" /></Link>}
            </div>
            <div className="navbar_contents">
                <ul className="navbar_menu">
                    {linkList}
                    {/* {<Link className="nav_link" to="/Portfolio"><li>포트폴리오</li></Link>}
                    {<Link className="nav_link" to="/Review"><li>회고</li></Link>} */}
                </ul>
            </div>
            <div className="navbar_login">
                {<Link className="nav_link"to="/Login"><img className="login_image" src="img/logo.png" />
                <span className="login_text">로그인</span></Link>}
            </div>

        </div>
    )
}

export default Nav
