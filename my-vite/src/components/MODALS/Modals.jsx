import React from 'react'
import Modal from './Modal'
import { useModal } from '../../hooks/useModal'
import SongSearch from '../SONG-SEARCH/SongSearch';
import ModalPortal from './ModalPortal';


const Modals = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false);
    const [isOpenModal,openModalPortal,closeModalPortal] = useModal(false);
    
    return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen = {isOpenModal1} closeModal = {closeModal1}>
            <h3>Modal 1</h3>
            <p>Contenido modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>

        <button onClick={openModalPortal}>Modal Portal</button>
        <ModalPortal isOpen = {isOpenModal} closeModal = {closeModalPortal}>
            <h3>Modal Portal</h3>
            <p> Este es el contenido de un modal que carga en otro nodo del DOM 
                diferente a donde carga nuestra  app de React,gracias a un React Portal
            </p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </ModalPortal>
    </div>
  )
}

export default Modals