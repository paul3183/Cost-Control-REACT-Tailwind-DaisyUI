import React, { useState } from 'react'
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      console.log('No es un presupuesto valido')
      setMessage(true)
    } else {
      console.log('Si es un presupuesto valido');
      setMessage(false)
      setIsValidBudget(true)
    }
  }

  return (
    <div className=''>
      <form
        onSubmit={handleBudget}
        className='p-2 md:px-[150px]'
      >
        <div className='flex flex-col items-center bg-white rounded-[20px] py-10'>
          <label
            htmlFor=""
            className='text-4xl font-bold'
          >
            Define Budget
          </label>

          <input
            type="number"
            placeholder="Add your Presupuesto"
            className="my-5 input input-bordered input-info text-center h-[40px] rounded-[20px] text-white w-[350px] md:w-[900px]"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />

          <button
            className="btn hover:bg-[#cf830a] dark:text-black bg-[#dca44b] text-white w-[200px] border-none md:w-[300px] md:text-[20px] text-[18px] font-bold"
            type='submit'
          >
            Add
          </button>
          {message && <Message><p>It's not a Valid Budget</p></Message>}
        </div>

      </form>
    </div>
  )
}

export default NewBudget