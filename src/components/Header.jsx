import React from 'react'
import BudgetControl from './BudgetControl.jsx'
import NewBudget from './NewBudget'


const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, setMessage }) => {
  return (
    <header className=''>
      <h1 className='text-center text-6xl font-bold'>Expense Planner</h1>

      {isValidBudget ? (
        <BudgetControl budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
          setMessage={setMessage}
        />
      )}
    </header>
  )
}

export default Header