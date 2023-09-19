import React from 'react'
import dollar from '../../Assets/images/dollar.svg'
import VolumeLogo from '../../Assets/images/volume.svg'
import FeesLogo from '../../Assets/images/fees.svg'

import './StatsSection.css'

function StatsSection() {
    return (
        <div className='stats-section'>
            <div className="value stat-box">
                <img src={dollar} alt="value" width={58} height={58} />
                <div className="stats-content">
                    <p className='grey-content'>Total Value Locked</p>
                    <p className='stats-rate value-rate'>$98,573</p>
                </div>
            </div>
            <div className="volume stat-box">
                <img src={VolumeLogo} alt="volume" width={58} height={58} />
                <div className="stats-content">
                    <p className='grey-content'>Total Trading Volume</p>
                    <p className='stats-rate volume-rate'>$2,802,297</p>
                </div>
            </div>
            <div className="fees stat-box">
                <img src={FeesLogo} alt="fees" width={58} height={58} />
                <div className="stats-content">
                    <p className='grey-content'>Accrued Fees</p>
                    <p className='stats-rate fees-rate'>$5,135</p>
                </div>
            </div>
        </div>
    )
}

export default StatsSection