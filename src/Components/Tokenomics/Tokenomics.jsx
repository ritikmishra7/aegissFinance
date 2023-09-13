import React from 'react'
import './Tokenomics.css'
import TokenInfo from './TokenInfo/TokenInfo'

function Tokenomics() {
    return (
        <div className='tokenomics-section'>
            <h3>Tokenomics</h3>
            <p className='token-p'>UrDEX is rooted in the principles of genuine decentralization, transparency, and community engagement. We stand firm in our commitment, ensuring that our team's goals and incentives mirror the expectations and needs of our platform's users.</p>
            <TokenInfo />
        </div>
    )
}

export default Tokenomics