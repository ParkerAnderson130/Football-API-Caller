import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (

        <ul id="nav">
            <li className="nav-item"><NavLink to ='/pass' exact activeClassName="active">#&ensp;Passing</NavLink></li>
            <li className="nav-item"><NavLink to ='/rush' exact activeClassName="active">#&ensp;Rushing</NavLink></li>
        </ul>

    );
}

export default Navbar;