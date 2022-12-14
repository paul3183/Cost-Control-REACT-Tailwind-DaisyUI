import React from 'react'
import Spent from './Spent'


const ListExpenses = ({ expense }) => {

  return (
    <div className=' '>
      <h2 >{expense.length ? 'Expenses' : 'There are no Expenses'}</h2>
      {
        expense.map(expen => (
          <Spent
            expen={expen}
            key={expen.id}
          />
        ))
      }
    </div >
  )
}

export default ListExpenses