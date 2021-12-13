import React from 'react'
import { Link } from "react-router-dom";
import "./index.css"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { navpages } from "../../features/pageSlice"

function Nav() {
    const navpage = useSelector((state) => state.page.nowpage)
    const [nowLink, setnowLink] = useState(navpage); //현재 보는 페이지 가져오기
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const moved = () => {
        if(window.scrollY > 50)
            setShow(true);
        else
            setShow(false);
    }

    const navsearchbar = () => { //현재 보는 페이지에 따라 검색바 구현
        //간격을 맞춰야할 필요가 있다
        if(nowLink[0] == "포스트") {
            return (
                <div className="navbar-search">
                    <input
                        type={"text"}
                        id={"navbar-search"}
                        placeholder={"블로그 포스트 검색하기"}
                        size={"30"}/>
                </div>
            )
        }
        else {
            return (
                <div className="navbar-link">
                    <a href="#">GitHub</a>
                </div>
            )
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", moved)
        return () => {
            window.removeEventListener("scroll", moved)
        };
    }, [])
    


    let link = [{"About" : "소개"} , {"Portfolio" : "포트폴리오"} ,  {"Post" : "포스트"}];

    const nowpage = (page) => {
        setnowLink(page);
        dispatch(navpages(page))
    }

    const linkList = link.map((linked, index) => <Link key={index} onClick={()=> {nowpage(Object.values(linked))}}className={`nav_link ${nowLink[0] == Object.values(linked) && "underline"}`}  to={`/${Object.keys(linked)}`}>
        <li>{`${Object.values(linked)}`}</li></Link>)

    return (
        <div className={`Navbar ${show && "Navbar_white"}`}>
            <div className="navbar_logo">
                {<Link to="/"  onClick={()=> nowpage("")}><h2 className="nav-logo">최병주</h2></Link>}
            </div>
            <div className="navbar_contents">
                <ul className="navbar_menu">
                    {linkList}
                    {/* {<Link className="nav_link" to="/Portfolio"><li>포트폴리오</li></Link>}
                    {<Link className="nav_link" to="/Review"><li>회고</li></Link>} */}
                </ul>
            </div>
            {navsearchbar()}


        </div>
    )
}

export default Nav
