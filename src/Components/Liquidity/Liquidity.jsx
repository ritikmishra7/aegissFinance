import React from 'react'
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import './Liquidity.css'
import logo from '../../Assets/images/logo.png'
import LiquidityCards from './LiquidityCards'

const data = [
    {
        riskType: 'lowRisk',
        name: 'Guardian Pool',
        subname: 'Earn 4800 AGS per day',
        price: '$1.06111',
        deposited: '$38,921',
        apr: '16.973%'
    },
    {
        riskType: 'mediumRisk',
        name: 'Archon Pool',
        subname: 'Earn 9600 AGS per day',
        price: '$1.03049',
        deposited: '$33,389',
        apr: '39.571%'
    },
    {
        riskType: 'highRisk',
        name: 'Divine Pool',
        subname: 'Earn 4800 AGS per day',
        price: '$1.2108',
        deposited: '$27,209',
        apr: '24.279%',
    },

]



function Liquidity() {
    return (
        <div className='liquidity'>
            <DashboardNavbar />
            <div className="liquidity-contents">
                <p className='l-head'>Liquidity</p>
                <div className='l-strip'>
                    <span className='l-para'>Add liquidity and receive incentives.</span>
                    <div className='l-strip-right'>
                        <span>Reward: <span style={{ fontWeight: '600' }}>0 AGS</span></span>
                        <button>CLAIM ALL REWARD</button>
                    </div>
                </div>
                <div className='l-upper-strip'>
                    <div className="l-left-part">
                        <div className="l-logos">
                            <img src={logo} alt="logo" width={40} height={40} />
                            <img src={logo} alt="logo" width={40} height={40} />
                        </div>
                        <div className='l-wrapper'>
                            <p className='l-left-white'>AGS/AGI</p>
                            <span className='l-left-grey'>Earn 4,800 per day</span>
                        </div>
                    </div>
                    <div className="l-right-part">
                        <div className='l-wrapper'>
                            <p className='l-right-grey'>Total Deposited</p>
                            <span className='l-right-white'>$21,870.963</span>
                        </div>
                        <div>
                            <p className='l-right-grey'>APR</p>
                            <span className='l-right-white'>30.205%</span>
                        </div>
                        <div className="arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.0478 4 8.24816 4.161 6.80371 4.35177C5.50372 4.52346 4.52346 5.50372 4.35177 6.80371C4.16101 8.24816 4 10.0478 4 12C4 13.9522 4.161 15.7518 4.35177 17.1963C4.52346 18.4963 5.50372 19.4765 6.80371 19.6482C8.24816 19.839 10.0478 20 12 20C13.9522 20 15.7518 19.839 17.1963 19.6482C18.4963 19.4765 19.4765 18.4963 19.6482 17.1963C19.839 15.7518 20 13.9522 20 12C20 10.0478 19.839 8.24816 19.6482 6.80371C19.4765 5.50372 18.4963 4.52346 17.1963 4.35177C15.7518 4.16101 13.9522 4 12 4ZM6.54184 2.36899C4.34504 2.65912 2.65912 4.34504 2.36899 6.54184C2.16953 8.05208 2 9.94127 2 12C2 14.0587 2.16953 15.9479 2.36899 17.4582C2.65912 19.655 4.34504 21.3409 6.54184 21.631C8.05208 21.8305 9.94127 22 12 22C14.0587 22 15.9479 21.8305 17.4582 21.631C19.655 21.3409 21.3409 19.655 21.631 17.4582C21.8305 15.9479 22 14.0587 22 12C22 9.94127 21.8305 8.05208 21.631 6.54184C21.3409 4.34504 19.655 2.65912 17.4582 2.36899C15.9479 2.16953 14.0587 2 12 2C9.94127 2 8.05208 2.16953 6.54184 2.36899Z" fill='currentColor'></path><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 7.79289C9.40237 8.18342 9.40237 8.81658 9.79289 9.20711L12.5858 12L9.79289 14.7929C9.40237 15.1834 9.40237 15.8166 9.79289 16.2071C10.1834 16.5976 10.8166 16.5976 11.2071 16.2071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L11.2071 7.79289C10.8166 7.40237 10.1834 7.40237 9.79289 7.79289Z" fill="currentColor"></path></svg>
                        </div>
                    </div>

                </div>
                <div className="whiteBorder">
                    <p className='liq-w-h'>Trading Pools</p>
                    <span className='liq-w-c'>Revolutionary Risk Management and LP Seniority Solution for Aegiss Liquidity Providers.</span>
                    {
                        data.map((item, index) => (
                            <LiquidityCards
                                key={`${item.name}-${index}`}
                                riskType={item.riskType}
                                name={item.name}
                                subname={item.subname}
                                price={item.price}
                                deposited={item.deposited}
                                apr={item.apr}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Liquidity