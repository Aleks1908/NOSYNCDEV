import React from "react";
import './facts_section.css';

export const FactCard = (props) => {
    return (
        <div className="fact-card-main">
            <div className="fact-card-picture">
                <img src={props.logo} />
            </div>
            <div className="fact-card-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
 
export default FactCard;