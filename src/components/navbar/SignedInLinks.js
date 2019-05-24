import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect} from 'react-redux';
import { signOut } from '../../actions/actions.auth'

const SignedInLinks = (props) => {
    const { signOut } = props;
    console.log(props)
    return (
        <ul className="right">
            <li><NavLink to='/createroutine'>New Routine</NavLink></li>
            {/* eslint-disable-next-line */}
            <li><a onClick={signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CG</NavLink></li>
        </ul>                
    )
}
const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}
const mapStateToProps = state => {
    console.log('from Navbar', state)
    return {

    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
