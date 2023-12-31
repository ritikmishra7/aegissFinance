import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import logo from '../../Assets/images/logo.png'
import ethlogo from '../../Assets/images/eth.png'
import { useLocation, useNavigate } from 'react-router-dom'
import './DashboardNavbar.css'
import Modal from '../Modal/Modal'
import Modal2 from './Modal2'

function DashboardNavbar() {
    const navigate = useNavigate()
    const location = useLocation();
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [rotationAngle, setRotationAngle] = useState(0);

    const handleSVGClick = () => {
        setShowModal2(!showModal2);
        if (rotationAngle === 0)
            setRotationAngle(180);
        else
            setRotationAngle(0);
    };

    const [pathname, setPathname] = useState('')

    useEffect(() => {

        setPathname(location.pathname.split('/')[1])
    }, [location])


    return (
        <div className='dashboard-navbar'>
            <div className="dashboard-navbar-left-side">
                <Logo />
                <div className="navbar-options">
                    <ul>
                        <li className={pathname === 'dashboard' ? 'selected' : ''} onClick={() => navigate('/dashboard')}>Dashboard</li>
                        <li>Perp</li>
                        <li>Convert</li>
                        <li>Swap</li>
                        <li className={pathname === 'launchpad' ? 'selected' : ''} onClick={() => navigate('/launchpad')}>Launchpad</li>
                        <li className={pathname === 'dao' ? 'selected' : ''} onClick={() => navigate('/dao')}>DAO</li>
                        <li className={pathname === 'liquidity' ? 'selected' : ''} onClick={() => navigate('/liquidity')}>Liquidity</li>
                        <div className='modal2Wrapper'>
                            <li onClick={handleSVGClick} className='more'
                            >More
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '10px', transform: `rotate(${rotationAngle}deg)` }}><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7 10l5 5 5-5H7z"></path></svg>
                            </li>
                            <Modal2 setShowModal2={setShowModal2} showModal2={showModal2} setRotationAngle={setRotationAngle} />
                        </div>
                    </ul>
                </div>
            </div>
            <div className="dashboard-navbar-right-side">
                <div className="amount-section">
                    <img src={logo} alt="logo" width={35} height={35} />
                    <p>$0.0037</p>
                </div>
                <div className="eth">
                    <button className='eth-btn' onClick={() => setShowModal(true)}>
                        <div className="eth-logo" >
                            <img src={ethlogo} alt="eth-logo" width={24} height={24} />
                            <p>Ethereum</p>
                        </div>
                    </button>
                </div>
                <button type='button' className='connect-wallet-btn'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.8334 4.16667H4.16671C3.24623 4.16667 2.50004 4.91286 2.50004 5.83333V14.1667C2.50004 15.0871 3.24623 15.8333 4.16671 15.8333H15.8334C16.7538 15.8333 17.5 15.0871 17.5 14.1667V5.83333C17.5 4.91286 16.7538 4.16667 15.8334 4.16667ZM4.16671 2.5C2.32576 2.5 0.833374 3.99238 0.833374 5.83333V14.1667C0.833374 16.0076 2.32576 17.5 4.16671 17.5H15.8334C17.6743 17.5 19.1667 16.0076 19.1667 14.1667V5.83333C19.1667 3.99238 17.6743 2.5 15.8334 2.5H4.16671Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.8334 10C10.8334 7.69882 12.6989 5.83334 15 5.83334H18.3334C18.7936 5.83334 19.1667 6.20644 19.1667 6.66668C19.1667 7.12691 18.7936 7.50001 18.3334 7.50001H15C13.6193 7.50001 12.5 8.6193 12.5 10C12.5 11.3807 13.6193 12.5 15 12.5H18.3334C18.7936 12.5 19.1667 12.8731 19.1667 13.3333C19.1667 13.7936 18.7936 14.1667 18.3334 14.1667H15C12.6989 14.1667 10.8334 12.3012 10.8334 10Z" fill="currentColor"></path><path d="M15.8333 9.99999C15.8333 10.4602 15.4602 10.8333 15 10.8333C14.5397 10.8333 14.1666 10.4602 14.1666 9.99999C14.1666 9.53975 14.5397 9.16666 15 9.16666C15.4602 9.16666 15.8333 9.53975 15.8333 9.99999Z" fill="currentColor"></path></svg>
                    <p>Connect Wallet</p>
                </button>
            </div>
            <Modal setShowModal={setShowModal} showModal={showModal} />
        </div>
    )
}

export default DashboardNavbar