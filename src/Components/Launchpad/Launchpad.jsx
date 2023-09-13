import React from 'react'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import './Launchpad.css'
import Button from '../Button/Button'
import LauchpadList from './LauchpadList'

function Launchpad() {
    return (
        <div className='launchpad'>
            <DashboardNavbar />
            <div className="lauchpad-content">
                <div className="lauchpad-upper">
                    <div className="launchpad-header-action">
                        <div className="launchpad-title">Launchpad</div>
                        <Button tittle={'Register Now'} />
                    </div>
                    <span>Our Launchpad is at the forefront of driving growth in the Arbitrum Ecosystem. By providing a decentralized and interoperable platform, it offers the latest projects the opportunity to raise capital and generate initial liquidity. The Launchpad also enables both the project and UrDEX communities to participate in carefully curated and vetted token offerings. In addition, it provides users with the ability to leverage the UrDEX's infrastructure for sustainable and adaptable liquidity. Whether you are a project looking to launch or a user seeking to participate, the Launchpad is the ideal platform for those seeking to enter the world of decentralized finance.</span>
                </div>
                <div className="lauchpad-lower">
                    <p>Lauchpad List</p>
                    <LauchpadList />
                    <LauchpadList />
                </div>
            </div>
        </div>
    )
}

export default Launchpad