import React from 'react';
// Connect to our store
import { connect } from 'react-redux';
// firestoreConnect is a higher oreder component to connect the HomePage component with a firestore collection
import { firestoreConnect } from 'react-redux-firebase'; 
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


const RoutinePage = (props) => {
    const { routine, auth } = props;
    var createdAt = routine.timestamp.toDate();
    if( !auth.uid ) return <Redirect to='/signin' />
    if(routine) {
        return (
            <div className='container section routine-page'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{routine.title}</span>
                        <p>{routine.description}</p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <p>Created by {routine.authorFirstName} {routine.authorLastName} - {createdAt.toString()}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container section routine-page'>
                <div className='card z-depth-0'>..Loading project</div>
            </div>
        )
    }
    
}


// connect to a certain collection in our firestore db
const mapStateToProps = (state, thisProps) => {
    const id = thisProps.match.params.id;
    const routines = state.firestore.data.routines;
    const routine = routines ? routines[id]: null;
    return {
        routine:routine,
        auth: state.firebase.auth
    }
}

// Compose different higher order components (connect and firestoreConnect)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'routines' }
    ])
)(RoutinePage);

