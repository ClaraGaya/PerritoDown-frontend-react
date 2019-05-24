import React, { Component } from 'react';
import AsanaList from './AsanaList';
import { addRoutine } from '../actions/actions.routines';
// Connect to our store
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; 
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

export class CreateRoutinePage extends Component {
    state = {
        title: '',
        description: '',
        routineAsanas: [1,2,3],
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRoutine(this.state);
    }
    render() {
        const { asanas, auth } = this.props;
        if( !auth.uid ) return <Redirect to='/signin' />
        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12 m8">
                    <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create Routine</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Routine Title</label>
                        <input type='text' id='title' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='description'>Routine Description</label>
                        <textarea id='description' className='materialize-textarea' onChange={this.handleChange} />
                    </div>
                    <div className='card-action grey lighten-4 grey-text dropping-area'>
                        <p>drop in asanas area</p>
                    </div>

                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create Routine</button>
                    </div>
                </form>
                    </div>
                    <div className="col s12 m4 asana-list">
                        <AsanaList asanas={asanas}/>
                    </div>
                </div>

                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRoutine: (routine) => dispatch(addRoutine(routine)),
    }
}
// connect to a certain collection in our firestore db
const mapStateToProps = (state) => {
    return {
        asanas:state.firestore.ordered.asanas,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'asanas'}
    ])
)(CreateRoutinePage);

