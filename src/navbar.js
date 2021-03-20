import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(    
    <nav><ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article/:title">Article</Link></li>
        <li><Link to="/articlelistpage">Article List</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul></nav>);


}
export default NavBar;