import React from 'react';
import bgImage from "./images/mirusan.png";

export const Profile = () => {
    return(
        <div className="profile_top">
            <h1>Profileです</h1>
            <h2>8/29生まれの柴犬です。</h2>
            <h3>今年で11歳になります。</h3>
            <img src ={bgImage} className="top_img" alt="top" />
        </div>
    )
}