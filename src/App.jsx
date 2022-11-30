import React, { useState } from 'react'
import Header from './components/Header'
import ThemeDark from './components/ThemeDark'

const App = () => {

  const [budget, setBudget] = useState(0);

  const [isValidBudget, setIsValidBudget] = useState(false)

  return (
    <div className='dark:bg-[#e4d8b4] text-[#dca44b] dark:text-black h-screen' >
      <ThemeDark />
      <div >
        <Header budget={budget} setBudget={setBudget} isValidBudget={isValidBudget} setIsValidBudget={setIsValidBudget} />
      </div>
    </div>



  )
}

export default App