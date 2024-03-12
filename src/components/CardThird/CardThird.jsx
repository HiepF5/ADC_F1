import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FaStar } from 'react-icons/fa'
const CardThird = ({ data }) => {
  return (
    <div className='text-black bg-white border-2 rounded-md border-gray-600/45 w-[380px] text-center'>
      <img src={data.img} alt='' className='mx-auto' />
      <div className='p-3 h-[150px] flex flex-col justify-around'>
        <div>
          <h1 className='text-md font-bold'>{data.title}</h1>
          <div className='flex gap-1 text-yellow-500'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
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

export default CardThird
