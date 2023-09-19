import React from 'react'
import logo from '../../Assets/images/logo.png'

function Redemption() {
    return (
        <div className='redemption'>
            <div className="stake-balance">
                <div className="input-form-title">
                    <span>Redeem</span>
                    <span>Balance: 0 AGS</span>
                </div>
                <div className="input-form-value">
                    <input type="text" inputMode='numeric' placeholder='0.00' />
                    <img src={logo} alt="logo" width={32} height={32} />
                </div>
            </div>
            <div className="swap-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M13.3333 8.00004C13.3333 6.69855 13.226 5.49882 13.0988 4.53584C12.9843 3.66919 12.3308 3.01568 11.4642 2.90122C10.5012 2.77404 9.30148 2.66671 7.99999 2.66671C6.6985 2.66671 5.49877 2.77404 4.53579 2.90122C3.66914 3.01568 3.01563 3.66919 2.90117 4.53584C2.77399 5.49881 2.66666 6.69855 2.66666 8.00004C2.66666 9.30153 2.77399 10.5013 2.90117 11.4642C3.01563 12.3309 3.66914 12.9844 4.53579 13.0989C5.49876 13.226 6.6985 13.3334 7.99999 13.3334C9.30148 13.3334 10.5012 13.226 11.4642 13.0989C12.3308 12.9844 12.9843 12.3309 13.0988 11.4642C13.226 10.5013 13.3333 9.30153 13.3333 8.00004ZM14.4207 4.36127C14.2272 2.89674 13.1033 1.77279 11.6388 1.57937C10.6319 1.4464 9.37247 1.33337 7.99999 1.33337C6.62751 1.33337 5.36805 1.4464 4.36122 1.57937C2.89669 1.77279 1.77274 2.89674 1.57932 4.36127C1.44635 5.36809 1.33332 6.62756 1.33332 8.00004C1.33332 9.37252 1.44635 10.632 1.57932 11.6388C1.77274 13.1033 2.89669 14.2273 4.36122 14.4207C5.36804 14.5537 6.62751 14.6667 7.99999 14.6667C9.37247 14.6667 10.6319 14.5537 11.6388 14.4207C13.1033 14.2273 14.2272 13.1033 14.4207 11.6388C14.5536 10.632 14.6667 9.37252 14.6667 8.00004C14.6667 6.62756 14.5536 5.3681 14.4207 4.36127Z" fill="currentColor"></path><path fillRule="evenodd" clip-rule="evenodd" d="M10.8047 6.5286C10.5444 6.26825 10.1223 6.26825 9.86193 6.5286L8 8.39052L6.13807 6.5286C5.87772 6.26825 5.45561 6.26825 5.19526 6.5286C4.93491 6.78894 4.93491 7.21105 5.19526 7.4714L7.5286 9.80474C7.78894 10.0651 8.21105 10.0651 8.4714 9.80474L10.8047 7.4714C11.0651 7.21105 11.0651 6.78894 10.8047 6.5286Z" fill="currentColor"></path></svg>
            </div>
            <div className="stake-balance">
                <div className="input-form-title">
                    <span>Receive</span>
                    <span>Balance: 0 AGS</span>
                </div>
                <div className="input-form-value">
                    <input type="text" inputMode='numeric' placeholder='0.00' />
                    <img src={logo} alt="logo" width={32} height={32} />
                </div>
            </div>
        </div>
    )
}

export default Redemption