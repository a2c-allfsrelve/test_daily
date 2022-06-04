import React from 'react'
import bgImage from "./images/mirusan.png";

export const Top = () => {
    return(
        <div className="top">
            <h1>Topです</h1>
            <img src ={bgImage} alt="top" />
        </div>
    )
}