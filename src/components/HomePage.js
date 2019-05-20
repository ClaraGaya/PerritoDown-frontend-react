import React, { Component } from 'react';
import RoutineList from './RoutineList';
import Notifications from './Notifications';
// Connect to our store
import { connect } from 'react-redux';


class HomePage extends Component {
    
    render(){
        const {routines}  = this.props;
        console.log(this.props)
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

const mapStateToProps = (state) => {
    return {
        routines: state.routines.routines,
    }
}
export default connect(mapStateToProps)(HomePage);