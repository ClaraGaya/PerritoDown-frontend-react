import React from 'react';
import format from '../format';


const RoutineSummary = ({routine}) => {
    return(
        <div className='card z-depth-0'>
            <div className='card-content grey-test test-darken-3'>
                <span className='card-title'>{routine.title}</span>
                <p>{routine.description}</p>
                <p className='grey-text'>Created by {routine.authorFirstName} {routine.authorLastName} - {format.dateTimeCal(routine.timestamp)}</p>
                <p className='grey-text'>{routine.asanas}</p>
            </div>
        </div>
    )
}

export default RoutineSummary;