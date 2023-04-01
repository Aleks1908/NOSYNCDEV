import React from "react";
import FactCard from "./FactCard";
import './facts_section.css';

export const FactsSection = (props) => {
    const {children} = props

    return (
        <div className="facts-container">
            <FactCard
                logo={'scuba-diving.jpg'}
                title={'Scuba diving in Indonesia'}
                text={'Indonesia is known for scuba diving due to its beautiful oceans.'}
            />   
            <FactCard
                logo={'scuba-diving.jpg'}
                title={'Scuba diving in Indonesia'}
                text={'Indonesia is known for scuba diving due to its beautiful oceans.'}
            />                       
        </div>
    )
}
 
export default FactsSection;