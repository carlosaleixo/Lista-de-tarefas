import React from 'react'
//CSS
import styles from './Modal.module.css'

interface Props  {
    children: React.ReactNode
    titulo: string
}

const Modal = ({children}: Props) => {
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.getElementById("modal")
        modal!.classList.add("hide")
    }

  return (
    <div id="modal" className='hide'>
        <div className={styles.fade} >
        </div>
        <div className={styles.modal}>
            <div className={styles.btnExit}>
                <i className='bi bi-x-square' onClick={closeModal}></i>
            </div>
            <h2 className={styles.btn5}>Text modal</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal