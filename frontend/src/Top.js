import React from 'react'
import bgImage from "./images/mirusan.png";

export const Top = () => {
    return(
        <div className="top">
            <h1>Topです</h1>
            <h2>TopですTopですTopですTopですTopですTopですTopですTopですTopですTopです</h2>
            <h3>TopですTopですTopですTopですTopですTopですTopですTopですTopですTopですTopですTopですTopですTopです</h3>
            <img src ={bgImage} className="top_img" alt="top" />
        </div>
    )
}