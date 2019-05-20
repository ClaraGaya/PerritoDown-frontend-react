import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">PerritoDown</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>                 
    )
}

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/createroutine'>New Routine</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CG</NavLink></li>
        </ul>                
    )
}

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>                   
    )
}

export default Navbar;