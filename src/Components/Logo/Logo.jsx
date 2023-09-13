import React from 'react'
import logo from '../../Assets/images/logo.png'
import './Logo.css'

function Logo() {
    return (
        <div className="logo-section">
            <img src={logo} alt="logo" />
            <p className="gradient-text">Aegiss Finance</p>
        </div>
    )
}

export default Logo