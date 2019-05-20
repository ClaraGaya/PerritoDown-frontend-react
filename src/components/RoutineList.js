import React from 'react';
import RoutineSummary from './RoutineSummary';

const RoutineList = () => {
    return (
        <div className='routine-list section'>
            <RoutineSummary />
            <RoutineSummary />
            <RoutineSummary />
            <RoutineSummary />
        </div>
    )
}

export default RoutineList;