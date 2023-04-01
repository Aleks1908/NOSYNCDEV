import React from "react";
import FactCard from "./FactCard";
import './facts_section.css';

export const FactsSection = (props) => {
    const {children} = props

    return (
        <div className="facts-main-container">
            <h1 className="facts-header">Featured places</h1>
            <div className="facts-components">
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
                <FactCard
                    logo={'scuba-diving.jpg'}
                    title={'Scuba diving in Indonesia'}
                    text={'Indonesia is known for scuba diving due to its beautiful oceans.'}
                /> 
            </div>
        </div>
    )
}
 
export default FactsSection;