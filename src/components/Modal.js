import React from 'react'
import { FiX } from 'react-icons/fi';
import ReactDom from 'react-dom'

function Modal({open, children, onClose, title}) {
    if(!open) return null
    return ReactDom.createPortal(
        <div className='modal'>
            <div className='modal__content'>
				<header>
					<h3>{title}</h3>
                	<button onClick={onClose}><FiX /></button>
				</header>
                {children}
            </div>
            <div className='modal__overlay'></div>
        </div>,
        document.getElementById('portal')
  )
}

export default Modal