import React from 'react';

const Asana = ({asana}) => {
    return (
        <li className="collection-item avatar">
            <img src={asana.imgUrl} alt="" className="circle" />
            <h5>{asana.english}</h5>
            <p>{asana.hindu}</p>
            <p className="orange-text text-lighten-2">{asana.sanskrit}</p>
            <p className="grey-text">{asana.category}</p>
        </li>
        )
    }
            
export default Asana;