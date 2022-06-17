import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <div className="header">
            <h1>
                <Link to='/'>Top</Link>
            </h1>
                <ul>
                    <li><Link to='/daily'>日報</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
        </div>
    )
}