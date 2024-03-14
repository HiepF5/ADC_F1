import React from 'react'

const Input = ({ type, placeholder }) => {
  return (
    <input
      className='w-full h-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset placeholder:text-white ring-gray-300 bg-transparent'
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
