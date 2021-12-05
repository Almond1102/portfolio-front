import React, { Suspense } from 'react'
import { Switch as Routes, Route } from "react-router-dom";
import FrontApp from "./front/components/App"
import AdminApp from "./admin/components/App"
import Login from "./admin/pages/login/Login"
import About from "./front/pages/About/index"
import Post from "./front/pages/Post/index"
import Portfolio from './front/pages/Portfolio/index';




function App() {
    return (
        <div>
            <Routes> 
                <Route exact={true} path="/">
                    <FrontApp/>
                </Route>
                <Route path="/admin">
                    <AdminApp/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/Post">
                    <Post/>
                </Route>
                <Route path="/Portfolio">
                    <Portfolio/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
