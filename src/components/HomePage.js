import React, { Component } from 'react';
import RoutineList from './RoutineList';
import Notifications from './Notifications';
// Connect to our store
import { connect } from 'react-redux';
// firestoreConnect is a higher oreder component to connect the HomePage component with a firestore collection
import { firestoreConnect } from 'react-redux-firebase'; 
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


class HomePage extends Component {
    render(){
        const { routines, auth, notifications } = this.props;
        console.log(notifications)

        if( !auth.uid ) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RoutineList routines={routines}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    } 
}
// connect to a certain collection in our firestore db
const mapStateToProps = (state) => {
    return {
        routines:state.firestore.ordered.routines,
        notifications:state.firestore.ordered.notifications,
        auth: state.firebase.auth
    }
}

// Compose different higher order components (connect and firestoreConnect)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'routines' },
        { collection: 'notifications', limit: 3}
    ])
)(HomePage);