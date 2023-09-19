import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import './Dao.css'
import Stake from './Stake';
import Redemption from './Redemption';
import Proposals from './Proposals';

function Dao() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='dao'>
            <DashboardNavbar />
            <div className="dao-contents">
                <div className="dao-header">
                    <div className='dao-header-title'><span>Aegiss DAO</span></div>
                    <div className='dao-header-content'>
                        <span>
                            Aegiss is dedicated to revolutionizing the digital asset landscape by prioritizing transparency, inclusiveness, and efficient liquidity solutions. Through the creation of a transparent and democratic governance system, the Aegiss DAO emerges as the decision-making body, guiding the platform on critical strategic endeavors.
                        </span>
                    </div>
                </div>
                <div className="dao-content">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className='tablist'>
                            <Tab className={`tabName ${tabIndex === 0 ? 'tabSelected' : null}`} >
                                <div>Stake</div>
                            </Tab>
                            <Tab className={`tabName ${tabIndex === 1 ? 'tabSelected' : null}`}>
                                <div>Redemption</div>
                            </Tab>
                            <Tab className={`tabName ${tabIndex === 2 ? 'tabSelected' : null}`}><div>Proposals</div>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Stake />
                        </TabPanel>
                        <TabPanel>
                            <Redemption />
                        </TabPanel>
                        <TabPanel>
                            <Proposals />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default Dao