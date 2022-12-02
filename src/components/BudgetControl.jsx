import React from 'react'

const BudgetControl = ({ budget }) => {

  const formatAmount = (amount) => {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(amount)
  }

  return (
    <div>
      <div >
        <p>Icon</p>
      </div>
      <div>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p>
          <span>Available: </span> {formatAmount(0)}
        </p>
        <p>
          <span>Spent: </span> {formatAmount(0)}
        </p>
      </div>

    </div>

  )
}

export default BudgetControl