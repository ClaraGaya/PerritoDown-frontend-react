import React from 'react';

const Asana = ({asana}) => {
    return (
        <li className="collection-item avatar">
            <img src={asana.imgurl} alt="" className="circle" />
            <h5>{asana.english}</h5>
            <p>{asana.name}</p>
            <p className="orange-text text-lighten-2">{asana.sanskrit}</p>
            <p className="grey-text">{asana.type}</p>
        </li>
        )
    }
            
export default Asana;