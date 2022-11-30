import React from 'react'
import BudgetControl from './BudgetControl.jsx'
import NewBudget from './NewBudget'


const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header >
      <h1 className='text-center text-6xl font-bold py-9'>Expense Planner</h1>

      {isValidBudget ? (
        <BudgetControl budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  )
}

export default Header