import React, { useRef, useEffect } from 'react'
import EtheriumLogo from '../../Assets/images/eth.png'
import logo from '../../Assets/images/logo.png'
import './Modal.css'

function Modal({ setShowModal, showModal }) {

    useEffect(() => {
        const handleClickAway = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickAway);
        } else {
            document.removeEventListener('mousedown', handleClickAway);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal]);

    const modalRef = useRef(null);


    return (
        <div className='modal' style={{
            display: showModal ? 'flex' : 'none'
        }} ref={modalRef}>
            <div className="modal-header">
                <img src={logo} alt="logo" width={45} height={45} />
                <div className="modal-right">
                    <div className="qs-mark btn-hover">
                        <svg width="12" height="12" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"></path></svg>
                    </div>
                    <div className="close-modal btn-hover" onClick={() => setShowModal(false)}>
                        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"></path></svg>
                    </div>
                </div>
            </div>
            <div className="modal-content">
                <p className='select-network'>Select Network</p>
                <div className='network-name btn-hover'>
                    <img src={EtheriumLogo} alt="eth" width={45} height={45} />
                    <p>Etherium</p>
                </div>
            </div>
        </div>
    )
}

export default Modal