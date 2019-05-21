import React, { Component } from 'react';
import AsanaList from './AsanaList';
import { connect } from 'react-redux';
import { addRoutine } from '../actions/actions.routines';
import { getAsanas } from '../actions/actions.asanas';


export class CreateRoutinePage extends Component {
    componentDidMount () {
        this.props.getAsanas();
    }
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
        this.props.addRoutine(this.state.title,this.state.description,this.state.routineAsanas);
    }
    render() {
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
                        <AsanaList asanas={this.props.asanas}/>
                    </div>
                </div>

                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRoutine: (name,description,asanasArr) => dispatch(addRoutine(name,description,asanasArr)),
        getAsanas: () => dispatch(getAsanas())
    }
}

const mapStateToProps = (state) => {
    return {
        asanas: state.asanas.data,
        loading: state.asanas.loading,
        error: state.asanas.error
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateRoutinePage);

