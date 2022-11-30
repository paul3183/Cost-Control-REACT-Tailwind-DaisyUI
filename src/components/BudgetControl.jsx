import React from 'react'

const BudgetControl = ({ budget }) => {
  return (
    <div>
      <div >
        <p>Icon</p>
      </div>
      <div>
        <p>
          <span>Budget: </span> ${budget}
        </p>
      </div>
    </div>

  )
}

export default BudgetControl