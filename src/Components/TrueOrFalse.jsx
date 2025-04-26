import React from 'react'

const TrueOrFalse = () => {
  return (
    <div className='flex gap-10'>
      <button className='bg-green-600 text-white px-7 rounded-sm hover:bg-green-700 hover:cursor-pointer'>
        True
      </button>
      <button className='bg-green-600 text-white px-7 rounded-sm hover:bg-green-700 hover:cursor-pointer'>
        False
      </button>
    </div>
  )
}

export default TrueOrFalse
