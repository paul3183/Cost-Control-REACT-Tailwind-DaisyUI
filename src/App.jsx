import React, { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ThemeDark from './components/ThemeDark'
import IconNewExpense from './img/nuevo-gasto.svg'

const App = () => {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  // usestate para el modal:
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    console.log('click to add new expense');
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true)
    }, 100);
  }

  const [message, setMessage] = useState(false);

  return (

    <div >
      <div
        className={`${message ? 'blur-sm' : ''} transition-all duration-700`}
      >
        <ThemeDark />
        <div className='dark:bg-[#e4d8b4] text-[#dca44b] dark:text-black h-screen py-[200px]' >
          <div >
            <Header
              budget={budget}
              setBudget={setBudget}
              isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget}
              setMessage={setMessage}
            />
          </div>
          {/* para el modal: */}
          {isValidBudget && (
            <div className='w-[3.5rem] h-[3.5rem] absolute bottom-10 right-10'>
              <img
                src={IconNewExpense}
                alt="Icon New Cost"
                onClick={handleNewExpense}
              />
            </div>
          )}
          {/* modal */}
          {modal && <Modal
            modal={modal}
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            message={message}
          />
          }
        </div>
      </div>

      <div
        className={`absolute inset-0 flex justify-center items-center transition-all duration-700 ease-in-out ${message ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <div className={`alert alert-error shadow-lg `}>
          <div>
            <div onClick={() => setMessage(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App