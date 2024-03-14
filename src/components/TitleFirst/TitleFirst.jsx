import React from 'react'

const TitleFirst = ({ title, description, location }) => {
  return (
    <div className='flex flex-col items-center gap-y-1'>
      <div className={` text-3xl font-semibold`}>{title}</div>
      <div className={`location text-center`}>{description}</div>
      <hr className={` block w-24 mt-3 border-2 border-primary`} />
    </div>
  )
}

export default TitleFirst
