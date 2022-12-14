import React from 'react'

const Spent = ({ expen }) => {

  return (
    <div>

      <div>
        <div>
          <p>{expen.category}</p>
          <p>{expen.name}</p>
          <p>{expen.date}</p>
        </div>
      </div>
    </div>
  )
}

export default Spent