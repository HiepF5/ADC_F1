import React from 'react'
const ItemFirst = ({ data }) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center w-[250px] text-center'>
        <img src={data.img} alt='' />
        <h2>{data.title}</h2>
        <span>{data.description}</span>
      </div>
    </div>
  )
}

export default ItemFirst
