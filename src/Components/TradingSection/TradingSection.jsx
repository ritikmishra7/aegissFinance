import React from 'react'
import BitCoin from '../../Assets/images/bitcoin.png'
import './TradingSection.css'

function TradingSection() {
    return (
        <div className='trading-section'>
            <h4>Trading pair</h4>
            <div className="price-part">
                <div className="btc-price">
                    <img src={BitCoin} alt="bitcoin" width={40} height={40} />
                    <p>BTC/USD</p>
                </div>
                <div className="price-info pinfo">
                    <p>Mark Price</p>
                    <span>$26,028.7</span>
                </div>
                <div className="h24-change pinfo">
                    <p>24h Change</p>
                    <span>3.54%</span>
                </div>
                <div className="h24-high pinfo">
                    <p>24h High</p>
                    <span>$26,028.7</span>
                </div>
                <div className="h24-low pinfo">
                    <p>Mark Price</p>
                    <span>$26,028.7</span>
                </div>
            </div>

        </div>
    )
}

export default TradingSection