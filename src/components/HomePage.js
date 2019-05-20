import React, { Component } from 'react';
import RoutineList from './RoutineList';
import Notifications from './Notifications';


class HomePage extends Component {
    render(){
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <RoutineList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    } 
}

export default HomePage;