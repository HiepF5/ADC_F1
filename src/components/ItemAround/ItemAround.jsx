import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
const ItemAround = ({ data }) => {
  return (
    <div className=' '>
      <div className='text-black bg-white rounded-full text-center'>
        <img src={data.img} alt='' className=' mx-auto' />
        <div className=' flex flex-col justify-between'>
          <h1 className='text-md font-bold'>{data.title}</h1>
          <h1 className='text-md font-bold'>{data.describe}</h1>
        </div>
      </div>
    </div>
  )
}

export default ItemAround
