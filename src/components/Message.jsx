import React from 'react'

const Message = ({ children }) => {
  return (
    <div className='bg-[#ff01f2] text-white font-semibold px-3 rounded-lg mt-5 p-1 w-[300px] text-center'>
      {children}
    </div>
  )
}

export default Message