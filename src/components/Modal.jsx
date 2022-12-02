import React from 'react'
import closeWindow from '../img/cerrar.svg'

const Modal = ({ modal, setModal, animateModal, setAnimateModal, message }) => {

  const closeModal = () => {
    console.log('closiing')
    // setModal(false);
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false)
    }, 400)
  }
  return (
    <div className='bg-[#000014] bg-opacity-95 absolute inset-0 color-white text-slate-100 '>
      <div className={`w-8 h-8 absolute right-12 pt-5 `}>

        <img
          src={closeWindow}
          alt="closeWindow"
          onClick={closeModal}
        />
      </div>
      <div>
        <form className='flex border flex-col justify-center items-center h-screen transition-all'>
          <legend>New Spent</legend>
          <div className='w-[300px] h-[300px] bg-red-700'>nan</div>
        </form>
      </div>

    </div>
  )
}

export default Modal