import React, { useState } from 'react'
import Header from './components/Header'
import ListExpenses from './components/ListExpenses'
import Modal from './components/Modal'
import ThemeDark from './components/ThemeDark'
import IconNewExpense from './img/nuevo-gasto.svg'
import { generateId } from './components/helpers'


const App = () => {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  // usestate para el modal:
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [message, setMessage] = useState(false);



  const handleNewExpense = () => {
    console.log('click to add new expense');
    setModal(true);
    // setTimeout(() => {
    //   setMessage('');
    // }, 3000);
  }
  // 
  const [expense, setExpense] = useState([]);
  const saveExpense = (spend) => {
    // console.log(spend);
    spend.date = Date.now();
    spend.id = generateId();

    setExpense([...expense, spend]);
    setModal(false);
    setAnimateModal(false);
  }

  return (

    <div className='bg-red-500 h-full'>
      <div
        className={` ${message ? 'blur-sm' : ''} transition-all duration-700`}
      >
        <ThemeDark />
        <div className={`${modal ? 'overflow-hidden h-screen' : 'p-3'}`}>
          <div className=''>
            <Header
              budget={budget}
              setBudget={setBudget}
              isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget}
              setMessage={setMessage}
            />
          </div>
          {/* para el modal: */}
          {isValidBudget && (
            <>
              <main className=''>
                <ListExpenses expense={expense}
                />
              </main>
              <div className='w-[3.5rem] h-[3.5rem] absolute bottom-10 right-10'>
                <img
                  src={IconNewExpense}
                  alt="Icon New Cost"
                  onClick={handleNewExpense}
                />
              </div>
            </>

          )}
          {/* modal */}
          {modal && <Modal
            modal={modal}
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            message={message}
            saveExpense={saveExpense}
          />
          }
        </div>
      </div>

      <div
        className={`absolute inset-0 flex justify-center items-center transition-all duration-700 ease-in-out ${message ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} p-4`}
      >
        <div className={`alert alert-error shadow-lg `}>
          <div className='mx-auto'>
            <div onClick={() => setMessage(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span>It is not a Valid Budget.</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App