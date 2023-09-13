import React from 'react'
import Button from '../Button/Button'
import LaunchpadImage from '../../Assets/images/image_launch.svg'
import './LaunchpadSection.css'
import { useNavigate } from 'react-router-dom'

function LaunchpadSection() {
    const navigate = useNavigate()
    return (
        <div className='launchpad-section'>
            <div className="launchpad-left-part">
                <h3>Launchpad</h3>
                <p>Venturing beyond traditional approaches, we introduce groundbreaking solutions tailored for the startup ecosystem.</p>
                <div onClick={() => navigate('/launchpad')}>
                    <Button tittle={'Go to Launchpad'} />
                </div>
            </div>
            <div className="launchpad-right-part">
                <img src={LaunchpadImage} alt="launchpad" />
            </div>
        </div>
    )
}

export default LaunchpadSection