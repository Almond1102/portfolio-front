import React from 'react'
import "./index.css"

function Badge() {
    const badge = [
        "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white", //HTML
        "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white", //CSS
        "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white", //SCSS
        "https://img.shields.io/badge/JavaScript-F7DF1E?for-the-badge&logo=JavaScript&logoColor=white", //JS
        "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white", //React
        "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white", //Redux
        "https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white", //React Router
        "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white", // Nodejs
        "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white", //MongoDb
        "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white", //Docker
        "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white", //Firebase
        "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white", //JWT

    ];

    const badgeList = badge.map(( list, index ) => <img key={index} className="badge" src={`${list}`}/>);
    
    return (
        <div className="badgeList">
            {badgeList}
        </div>
    )
}

export default Badge
