import React from 'react'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import './Launchpad.css'
import Button from '../Button/Button'
import LauchpadList from './LauchpadList'

function Launchpad() {

    const data = [
        {
            name: 'AGS (Round For Community)',
            raiseSize: '1,375,000 AGS',
            status: 'Ended',
            rounds: '1'

        },
        {
            name: 'AGS (Public Sale)',
            raiseSize: '2,812,500 AGS',
            status: 'Ended',
            rounds: '1'
        },
    ]

    return (
        <div className='launchpad'>
            <DashboardNavbar />
            <div className="lauchpad-content">
                <div className="lauchpad-upper">
                    <div className="launchpad-header-action">
                        <p className="launchpad-title">Launchpad</p>
                        <Button tittle={'Register Now'} />
                    </div>
                    <span>Our Launchpad is shaping the trajectory of the Ethereum Ecosystem's evolution. As a decentralized and interoperable hub, it extends a golden ticket to nascent projects for capital influx and initial liquidity inception. Beyond fundraising, it curates token offerings, providing a bridge for both the projects and the Aegiss communities to converge. Users also benefit from tapping into Aegiss's robust infrastructure for agile and enduring liquidity solutions. Catering to both emergent projects and users, the Launchpad stands as a beacon for those navigating the decentralized finance sphere.</span>
                </div>
                <div className="lauchpad-lower">
                    <p className='lpad-list-title'>Lauchpad List</p>
                    {
                        data.map((item, index) => {
                            return (
                                <LauchpadList key={`${item.name}+${index}`} name={item.name} raiseSize={item.raiseSize} status={item.status} rounds={item.rounds} />
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Launchpad