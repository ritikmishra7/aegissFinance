import React from 'react'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import HeroSection from '../HeroSection/HeroSection'
import TokenInfo from '../Tokenomics/TokenInfo/TokenInfo'
import StatsSection from '../StatsSection/StatsSection'
import TradingSection from '../TradingSection/TradingSection'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dashboard'>
            <DashboardNavbar />
            <div className="dashboard-content">
                <HeroSection path='dashboard' />
            </div>
            <StatsSection />
            <TradingSection />
            <TokenInfo path='dashboard' />
        </div>
    )
}

export default Dashboard