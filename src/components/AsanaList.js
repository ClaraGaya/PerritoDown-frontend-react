import React from 'react';
import Asana from './Asana';

const AsanaList = ({asanas}) => {
    return (
        <ul className="collection">
        {
            asanas && asanas.map( item => {
                return (
                    <Asana key={item.id} asana={item}/>
                )
            })
        }
        </ul>
    )
}

export default AsanaList;