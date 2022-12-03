import React, { useState } from 'react'
import closeWindow from '../img/cerrar.svg'

const Modal = ({ modal, setModal, animateModal, setAnimateModal, message }) => {

  const [messageModal, setMessageModal] = useState('');

  //ESTADOS PARA DAR FUNCIONALIDAD A LOS INPUTS:
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('')

  const closeModal = () => {
    console.log('closiing')
    setModal(false);
    setAnimateModal(false);
    // setTimeout(() => {
    //   setModal(false)
    // }, 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Send Form');
    if ([name, amount, category].includes('')) {
      console.log('fallo la validcion');
      setMessageModal('All fields are required')
      return;
    }
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
        <form
          className='flex flex-col justify-center items-center h-screen gap-4'
          onSubmit={handleSubmit}
        >
          <legend className='text-6xl py-3'>New Spent</legend>
          <div className='text-2xl flex flex-col items-center gap-2 '>
            <label htmlFor="name">Expense Name</label>
            <input
              id='name'
              type="text"
              placeholder="Add the name of the Expense" className="input input-bordered input-success max-w-xs text-center w-screen"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div className='text-2xl flex flex-col items-center gap-2 '>
            <label htmlFor="amount">Amount</label>
            <input
              id='amount'
              type="number"
              placeholder='Add the amount: ej. 300'
              className="input input-bordered input-success max-w-xs text-center w-screen"
              value={amount}
              onChange={({ target }) => setAmount(Number(target.value))}
            />
          </div>
          <div className='text-2xl flex flex-col items-center gap-2 '>
            <label htmlFor="category">Category</label>
            <select
              className="select select-accent max-w-xs text-center w-screen"
              id='category'
              defaultValue={category}
              onChange={({ target }) => setCategory(target.value)}
            >
              <option value=''>--select--</option>
              <option value='saving'>Saving</option>
              <option value='food'>Food</option>
              <option value='home'>Home</option>
              <option value='others'>Others</option>
              <option value='free'>Free</option>
              <option value='health'>Health</option>
              <option value='subscriptions'>Subscriptions</option>
            </select>
          </div>
          <button
            type='submit'
            className="btn glass mt-3">Add Expense
          </button>

        </form>
      </div>

    </div>
  )
}

export default Modal