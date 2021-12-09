import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Bakery Delivery Center</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li> 
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

//alt+shift+down key to copy a specific
//see materialize series in the channel
/*use Link and NavLink to prevent addidtional requests to server
- both smoothly load components
- NavLink has additional attributes loading in developer tools when clicked and 
show the active link that is pressed. essential to ditect active pages for further designs
*/

