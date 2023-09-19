import React from 'react'
import valueLogo from '../../Assets/images/value2.svg'
import locked from '../../Assets/images/locked.svg'
import staking from '../../Assets/images/staking.svg'
import dollar from '../../Assets/images/dollar.svg'
import Button from '../Button/Button'
import logo from '../../Assets/images/logo.png'

function Stake() {
    return (
        <div className='stake'>
            <div className="stake-info-bar">
                <div className="treasury-total">
                    <img src={valueLogo} alt="value" width={48} height={48} />
                    <div>
                        <p className='stake-grey'>Treasury Total</p>
                        <p className='stake-white'>$4,079.784</p>
                    </div>
                </div>
                <div className="circulating-supply">
                    <img src={dollar} alt="dollar" width={48} height={48} />
                    <div>
                        <p className='stake-grey'>AGS Circulating Supply</p>
                        <p className='stake-white'>66.7820191903 AGS</p>
                        <p className='stake-lower'>1 AGS ~ $61.091</p>
                    </div>
                </div>
                <div className="total-locked">
                    <img src={locked} alt="locked" width={48} height={48} />
                    <div>
                        <p className='stake-grey'>Total AGS Locked</p>
                        <p className='stake-white'>9,772,891.33 AGS</p>
                        <p className='stake-lower'>~$36,850.192</p>
                    </div>
                </div>
                <div className="staking">
                    <img src={staking} alt="locked" width={48} height={48} />
                    <div>
                        <p className='stake-grey'>Staking APR</p>
                        <p className='stake-white'>30.25%</p>
                        <p className='stake-lower'>0.49999 AGS per day</p>
                    </div>
                </div>
            </div>
            <div className="stake-info">
                <div className="stake-info-left">
                    <p>Stake</p>
                    <div className='stake-info-card'>
                        <div className="stake-balance">
                            <div className="input-form-title">
                                <span>Stake</span>
                                <span>Balance: 0 AGS</span>
                            </div>
                            <div className="input-form-value">
                                <input type="text" inputMode='numeric' placeholder='0.00' />
                                <img src={logo} alt="logo" width={32} height={32} />
                            </div>
                        </div>
                        <Button tittle={'Connect Wallet'} className={'stake-btn'} />
                    </div>
                </div>
                <div className="stake-info-right">
                    <p className='staking-information'>Staking information</p>
                    <div className='st-border'>
                        <div className='st-1'>
                            <p className='st-left'>Your Staked AGS</p>
                            <div className='stake-right-card'>
                                <div className='stake-staked'>
                                    <img src={logo} alt="logo" width={40} height={40} />
                                    <div>
                                        <p className='st-1-white'>0 AGS</p>
                                        <p className='st-1-grey'>~$0</p>
                                    </div>
                                </div>
                                <button className='st-1-btn'>Unstake</button>
                            </div>
                        </div>
                        <div className="b-bottom">

                        </div>
                        <div className='st-1'>
                            <p className='st-left'>Your AGS</p>
                            <div className='stake-right-card'>
                                <div className='stake-staked'>
                                    <img src={logo} alt="logo" width={40} height={40} />
                                    <div>
                                        <p className='st-1-white'>0 AGS</p>
                                        <p className='st-1-grey'>~$0</p>
                                    </div>
                                </div>
                                <button className='st-1-btn'>Claim</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stake