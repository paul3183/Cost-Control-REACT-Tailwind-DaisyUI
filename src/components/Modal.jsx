import React from 'react'
import closeWindow from '../img/cerrar.svg'

const Modal = ({ modal, setModal, animateModal, setAnimateModal, message }) => {

  const closeModal = () => {
    console.log('closiing')
    setModal(false);
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false)
    }, 100)
  }
  return (
    <div className='bg-[#000014] bg-opacity-95 absolute inset-0 color-white text-slate-100'>
      <div className={`w-8 h-8 absolute right-12 pt-5 `}>

        <img
          src={closeWindow}
          alt="closeWindow"
          onClick={closeModal}
        />
      </div>
      <div>
        <form className='flex border flex-col justify-center items-center h-screen'>
          <legend>New Spent</legend>
          <div className=' bg-red-700 flex flex-col'>
            <label htmlFor="amount">Expense Name</label>
            <input
              id='name'
              type="text"
              placeholder='Add the name of the Expense'
            />
          </div>

          <div className='flex flex-col bg-red-700'>
            <label htmlFor="amount">Amount</label>
            <input
              id='amount'
              type="number"
              placeholder='add the amount of the expense: ej. 300'
            />
          </div>
          <div className=''>
            <label htmlFor="amount">Amount</label>
            <input
              id='amount'
              type="number"
              placeholder='add the amount of the expense: ej. 300'
            />
          </div>
        </form>
      </div>

    </div>
  )
}

export default Modal