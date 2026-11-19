import React from 'react'
import "./Modal.css";
import ReactDOM from "react-dom";

const ModalPortal = ({children,isOpen,closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation();

  return ReactDOM.createPortal(
    <div className= {`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClick}>
            <button onClick={closeModal} className='modal-close'>x</button>
            {children}
        </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ModalPortal