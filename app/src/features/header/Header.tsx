import React from 'react';
import logo from './../../assets/logo-pokemon-79x45.png';

export function Header() {
    return (
        <nav className="navbar bg-light mb-4 rounded-2">
            <div className="container">
                <img src={logo} alt="" />
            </div>
        </nav>
    );
}
