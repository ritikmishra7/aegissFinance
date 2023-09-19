import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Modal2.css'
function Modal2({ setShowModal2, showModal2, setRotationAngle }) {
    const modal2Ref = useRef(null);

    useEffect(() => {
        const handleClickAway = (event) => {
            if (modal2Ref.current && !modal2Ref.current.contains(event.target) && !event.target.closest('.more')) {
                setShowModal2(false);
                setRotationAngle(0);
            }
        };

        if (showModal2) {
            document.addEventListener('mousedown', handleClickAway);
        } else {
            document.removeEventListener('mousedown', handleClickAway);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showModal2]);

    return (
        <div className='modal2' style={{
            display: showModal2 ? 'flex' : 'none'
        }}
            ref={modal2Ref}
        >
            <div style={{ marginBottom: '10px' }} className='iconWrapper' >
                <Link to={'#'} className='link-with-name'>
                    <svg width="20px" height="20px" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: '8px' }}
                    >
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                    </svg>
                    <p style={{ marginLeft: '20px' }}>Twitter</p>
                </Link>
            </div>
            <div style={{ marginBottom: '10px' }} className='iconWrapper'>
                <Link to={'#'} className='link-with-name'>
                    <svg width="40px" height="40px" viewBox="30 0 100 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M76.33 132.14L62.5 143.73L58.59 144.26L49.84 114.11L19.06 104L113.82 67.8799L118.29 67.9799L103.36 149.19L76.33 132.14ZM100.03 83.1399L56.61 109.17L61.61 130.5L62.98 130.19L68.2 113.73L102.9 83.4799L100.03 83.1399Z" fill="currentColor" />
                    </svg>
                    <p style={{ marginLeft: '10px' }}>Telegram</p>
                </Link>
            </div>

            <div style={{ marginBottom: '10px' }} className='iconWrapper'>
                <Link to={'#'} className='link-with-name'>
                    <svg fill="currentColor" width="25px" height="25px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                        style={{ marginLeft: '5px' }}
                    ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"></path></g></svg>
                    <p style={{ marginLeft: '20px' }}>Gitbook</p>
                </Link>
            </div>
        </div>
    )
}

export default Modal2