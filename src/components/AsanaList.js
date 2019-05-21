import React from 'react';
import Asana from './Asana';

const AsanaList = ({asanas}) => {
    return (
        <ul className="collection">
        {
            asanas && asanas.map(asana => {
                return (
                    <Asana key={asana.id} asana={asana}/>
                )
            })
        }
        </ul>
    )
}

export default AsanaList;