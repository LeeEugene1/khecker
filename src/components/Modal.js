import React from 'react'
import { FiX } from 'react-icons/fi';
import ReactDom from 'react-dom'

function Modal({open, children, onClose}) {
    if(!open) return null
    return ReactDom.createPortal(
        <div className='modal'>
            <div className='modal__content'>
                <div onClick={onClose}><FiX /></div>
                {children}
            </div>
            <div className='modal__overlay'></div>
        </div>,
        document.getElementById('portal')
  )
}

export default Modal