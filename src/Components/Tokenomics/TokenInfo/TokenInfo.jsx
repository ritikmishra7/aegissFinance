import React from 'react'
import TokenomicsData from '../TokenomicsData'
import TokenomicsCard from '../TokenomicsCard/TokenomicsCard'
import DashboardCard from '../../../Assets/images/dashboard-card.svg'
import TokenomicsBanner from '../../../Assets/images/tokenomics-banner.svg'
import './TokenInfo.css'

function TokenInfo({ path }) {
    return (
        <div className="tokenomics-wrapper">
            <div className="tokenomics-container">
                <div className="tokenomics-left">
                    {TokenomicsData.map((item, index) => {
                        return (
                            <TokenomicsCard
                                key={`${item.title}-${index}`}
                                title={item.title}
                                subtitle={item.subtitle}
                                desc={item.desc}
                                index={index}
                                path={path}
                            />
                        )
                    })
                    }
                </div>
                <div className="tokenomics-right">
                    {path === 'dashboard' ?
                        <img src={DashboardCard} alt="banner" />
                        :
                        <img src={TokenomicsBanner} alt="banner" />}

                </div>
            </div>
        </div>
    )
}

export default TokenInfo