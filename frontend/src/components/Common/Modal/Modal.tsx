import React from 'react'
import style from './Modal.module.css'

type PropsType = {
    active: boolean
    deactivate: () => void
    title: string
}

export const Modal: React.FC<PropsType> = ({active, deactivate, title, children}) => {

    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={deactivate}>
            <div className={active ? `${style.modalContent} ${style.active}` : style.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.title}><h1>{title}</h1></div>
                {children}
            </div>
        </div>
    )
}

export default Modal