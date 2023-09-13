import React from 'react'
import Logo from '../Logo/Logo'
import Socials from '../Socials/Socials'
import './Navbar.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <Logo />
            <Socials />
        </div>
    )
}

export default Navbar