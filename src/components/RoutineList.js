import React from 'react';
import RoutineSummary from './RoutineSummary';

const RoutineList = ({routines}) => {
    return (
        <div className='routine-list section'>
            {
                routines && routines.map( item => {
                    return (
                        <RoutineSummary key={item.id} routine={item}/>
                    )
                })
            }
        </div>
    )
}

export default RoutineList;