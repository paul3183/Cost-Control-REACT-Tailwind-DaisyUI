import React, { useState } from 'react'
import closeWindow from '../img/cerrar.svg'

const Modal = ({ modal, setModal, animateModal, setAnimateModal, message, saveExpense }) => {

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
      setTimeout(() => {
        setMessageModal('');
      }, 10000)
      return;
    }
    saveExpense({ name, amount, category });
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
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center h-screen gap-4'
        >
          <legend className='text-6xl py-3'>New Spent</legend>
          {messageModal && <div className='w-full p-2'>
            <div className="alert alert-warning shadow-lg">
              <div className='mx-auto'>
                <svg onClick={() => setMessageModal(false)} xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span className=''>{messageModal}</span>
              </div>
            </div>
          </div>}

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