import React from 'react';
import RoutineSummary from './RoutineSummary';
import { Link } from 'react-router-dom'; 



const RoutineList = ({routines}) => {
    return (
        <div className='routine-list section'>
            {
                routines && routines.map( item => {
                    return (
                        <Link to={'/routines/'+item.id} key={item.id}>
                            <RoutineSummary routine={item}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}


export default RoutineList;

