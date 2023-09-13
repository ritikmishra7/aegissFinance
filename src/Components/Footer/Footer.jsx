import React from 'react'
import Logo from '../../Assets/images/logo.png'
import './Footer.css'
import Socials from '../Socials/Socials'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo-section">
                <img src={Logo} alt="logo" />
                <p className='gradient-text'>Aegiss Finance</p>
            </div>
            <div className="socials-wrapper">
                <Socials />
            </div>
        </div>
    )
}

export default Footer