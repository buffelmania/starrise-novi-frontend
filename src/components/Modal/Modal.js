import React from 'react';

const Modal = ({ showModal, handleClose, children }) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className="modal-main">
                <button className="close-btn" onClick={handleClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};



export default Modal;