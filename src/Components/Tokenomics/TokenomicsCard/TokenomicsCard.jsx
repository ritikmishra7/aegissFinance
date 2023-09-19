import React from 'react'
import Logo from '../../../Assets/images/logo.png'
import './TokenomicsCard.css'
import Button from '../../Button/Button'
function TokenomicsCard({ title, subtitle, desc, path, index }) {
    return (
        <div className='tokenomics-card'>
            <div className="tokenomics-title">
                <div className='nomics-wrapper'>
                    <div className="tokenomics-logo">
                        <img src={Logo} alt="logo" width={40} height={50} />
                    </div>
                    <div className="tokenomics-heading-text">
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                </div>
                {path === 'dashboard' && index === 0 ? <Button tittle='Earn AGS' /> : null}
            </div>
            <div className="tokenomics-desc">
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default TokenomicsCard