import React from 'react'

const RoutinePage = (props) => {
    const id = props.match.params.id
    return (
        <div className='container section routine-page'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Routine Title - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <p>Author</p>
                    <p>Date</p>
                </div>
            </div>
        </div>
    )
}

export default RoutinePage
