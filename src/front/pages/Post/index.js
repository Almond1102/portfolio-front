import React from 'react'
import "./index.css"
import Nav from "../../components/Nav/index"

function Post() {
    return (
        <div>
            <Nav/>
            <div className="post-box">
                <h2 className="Post_title">Expenses</h2>
            </div>
        </div>
    )
}

export default Post
