import React, { Component } from 'react';
import AsanaList from './AsanaList';


export class CreateRoutinePage extends Component {
    state = {
        title: '',
        description: '',
        asanas: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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
                    <div className="col s12 m3 offset-m1">
                        <AsanaList />
                    </div>
                </div>

                
            </div>
        )
    }
}

export default CreateRoutinePage;

