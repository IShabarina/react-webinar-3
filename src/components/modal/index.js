import React from "react";
import ReactDOM from 'react-dom';
import './style.css';

function Modal({ isOpen, btnClose, children, onClose }) {
    const node = document.querySelector('#modal_root');
    if (!node || !isOpen) return null;
   
       return ReactDOM.createPortal((
        <div className='Modal-background'>
            <div className='Modal'>
                <div className='Modal-btn' onClick={onClose}>
                    {btnClose}
                </div>
                {children}
            </div>
        </div>
    ), node);
}

export default React.memo(Modal);

