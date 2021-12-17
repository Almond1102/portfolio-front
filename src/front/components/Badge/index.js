import React from 'react'
import "./index.css"

function Badge() {
    const badge = [
        "https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white", //HTML
        "https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white", //CSS
        "https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white", //SCSS
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white", //JS
        "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white", //React
        "https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white", //Redux
        "https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white", //React Router
        "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white", // Nodejs
        "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white", //MongoDb
        "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white", //Docker
        "https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white", //Firebase
        "https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON Web Tokens&logoColor=white", //JWT

    ];

    const badgeList = badge.map(( list, index ) => <img key={index} className="badge" src={`${list}`}/>);
    
    return (
        <div className="badgeList">
            {badgeList}
        </div>
    )
}

export default Badge
