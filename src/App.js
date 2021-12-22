import React, { Suspense, useEffect } from 'react'
import { Switch as Routes, Route } from "react-router-dom";
import FrontApp from "./front/components/App"
import AdminApp from "./admin/components/App"
import Login from "./admin/pages/login/Login"
import About from "./front/pages/About/index"
import Post from "./front/pages/Post/index"
import Portfolio from './front/pages/Portfolio/index';
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles





function App() {

    
  
    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    },)

    return (
        <div>
            <Routes> 
                <Route exact={true} path="/" component={FrontApp}/>

                {/* 관리페이지 */}
                <Route path="/admin" component={AdminApp}/>

                {/* 프론트 페이지 */}
                <Route path="/login" component={Login}/>
                <Route path="/About" component={About}/>
                <Route path="/Post" component={Post}/>
                <Route path="/Portfolio" component={Portfolio}/>
            </Routes>
        </div>
    )
}


export default App
