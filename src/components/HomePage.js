import React, { Component } from 'react';
import RoutineList from './RoutineList';
import Notifications from './Notifications';
// Connect to our store
import { connect } from 'react-redux';
// firestoreConnect is a higher oreder component to connect the HomePage component with a firestore collection
import { firestoreConnect } from 'react-redux-firebase'; 
import { compose } from 'redux';


class HomePage extends Component {
    render(){
        const { routines } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RoutineList routines={routines}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
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
    }
}

// Compose different higher order components (connect and firestoreConnect)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'routines' }
    ])
)(HomePage);