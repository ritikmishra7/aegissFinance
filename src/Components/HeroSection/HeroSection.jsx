import React from 'react'
import './HeroSection.css'
import Animation from '../../Assets/images/Animation.gif'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function HeroSection({ path }) {
    const navigate = useNavigate()
    return (
        <div className='hero-section'>
            <div className="hero-left">
                <img src={Animation} alt="banner" />
            </div>
            <div className="hero-right">
                <h3>Risk Mastery Meets Liquid Agility.</h3>
                <p>Introducing a decentralized perpetual exchange combined with cutting-edge risk management solutions.</p>
                <div onClick={() => navigate('/dashboard')}>
                    {path === 'dashboard' ? '' : <Button tittle={'Use App'} />}
                </div>
            </div>
        </div>
    )
}

export default HeroSection