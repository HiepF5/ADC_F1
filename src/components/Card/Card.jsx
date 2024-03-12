import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
const Card = ({ data }) => {
  return (
    <div className=' '>
      <div className='text-black bg-white border-2 rounded-md border-gray-600/45 w-[288px]'>
        <img src={data.img} alt='' />
        <div className='p-4  h-[150px] flex flex-col justify-between'>
          <h1 className='text-md font-bold'>{data.title}</h1>
          <div className=' flex flex-col'>
            <div className='flex items-center gap-2 '>
              <AiOutlineClockCircle className=' w-5 h-5' />
              {data.time}
            </div>
            <div className='flex items-center gap-2'>
              <RiMoneyDollarCircleLine className=' w-5 h-5' />
              Price from <span className='text-primary'>{data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
