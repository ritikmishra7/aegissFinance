import React from 'react'
import proposalsLogo from '../../Assets/images/proposals.svg'
function Proposals() {
    return (
        <div className='empty-proposals'>
            <img src={proposalsLogo} alt="proposal" width={50} height={50} />
            <p>No proposal</p>
        </div>
    )
}

export default Proposals