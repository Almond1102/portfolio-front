import React from 'react'
import { Switch as Routes, Route } from "react-router-dom";
import FrontApp from "./front/components/App"
import AdminApp from "./admin/components/App"
import Login from "./admin/pages/login/Login"


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
            </Routes>
        </div>
    )
}

export default App
