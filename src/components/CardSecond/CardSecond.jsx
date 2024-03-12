import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
const CardSecond = ({ data }) => {
  return (
    <div className='relative'>
      <img src={data.img} alt='' />
      <div className='absolute bottom-0 left-0 z-10 w-[389px] h-[200px] bg-gradient-to-t from-black to-transparent'></div>
      <div className='absolute w-[389px] -bottom-2 left-0 z-20 text-white p-4'>
        <h1 className='text-md font-bold'>{data.title}</h1>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <AiOutlineClockCircle />
            <div>{data.time}</div>
          </div>
          <div className='flex items-center gap-2'>
            <RiMoneyDollarCircleLine />
            <div>
              Price from <span className='text-primary'>{data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSecond
