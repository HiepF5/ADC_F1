import React from 'react'

const TitleMain = ({ title, location }) => {
  return (
    <div className='relative'>
      <div className={` text-3xl ${location} font-semibold`}>{title}</div>
      <hr className={` block w-24 ${location === 'text-center' ? 'mx-auto' : ''} mt-3 border-2 border-primary`} />
    </div>
  )
}

export default TitleMain
