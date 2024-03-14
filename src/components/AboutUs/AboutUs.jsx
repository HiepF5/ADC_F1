import React from 'react'
import back_3 from '../../assets/img/back_3.png'
import { data } from 'autoprefixer'
const Data = {
  title: 'About Us',
  description:
    'How to have a great trip as you expected? Among trusted online travel agencies, Eco Nature Travel Vietnam is one of the local companies that guarantees you an enjoyable trip beyond your expectations. We bring you amazing beauty as you discover the hidden charms of Vietnam, Laos and Cambodia. We have received high ratings from previous customers; Therefore, we are honored to promote ourselves as an organizer of Vietnam tours for you. Please contact us and tell us your request, we will provide you with a memorial cruise trip!'
}
const AboutUs = () => {
  return (
    <div className=''>
      <div className='pt-10 text-white relative'>
        <div className='relative flex justify-center items-center'>
          <img className='relative inset-0 mx-auto -top-4 z-0 left-0' src={back_3} alt='' />
        </div>
        <div className=''>
          <div className='flex flex-col justify-center container absolute inset-0 z-10 top-0 mx-auto text-center'>
            <h2 className='text-3xl font-bold'>{Data.title}</h2>
            <hr className={` block w-24 mt-3 mx-auto border-2 border-white `} />
            <p className='py-7'>{Data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
