import React from 'react'
import back_4 from '../../assets/img/back_4.png'
import Input from '../Input/Input'
const Data = {
  title: 'Quick Tour Inquiry',
  description:
    'How to have a great trip as you expected? Among trusted online travel agencies, Eco Nature Travel Vietnam is one of the local companies that guarantees you an enjoyable trip beyond your expectations. We bring you amazing beauty as you discover the hidden charms of Vietnam, Laos and Cambodia. We have received high ratings from previous customers; Therefore, we are honored to promote ourselves as an organizer of Vietnam tours for you. Please contact us and tell us your request, we will provide you with a memorial cruise trip!'
}
const Inquiry = () => {
  return (
    <div className=''>
      <div className='pt-10 text-white relative'>
        <div className='relative flex justify-center items-center'>
          <img className='relative inset-0 mx-auto z-20 left-0' src={back_4} alt='' />
        </div>
        <div className=''>
          <div className='flex flex-col justify-center container absolute inset-0 z-10 top-0 mx-auto text-center'>
            <h2 className='text-3xl font-bold'>{Data.title}</h2>
            <hr className={` block w-24 mt-3 mx-auto border-2 border-white `} />
            <div className='grid grid-cols-3 gap-4 grid-flow-rows pt-10'>
              <div>
                <Input type='text' placeholder='*Full Name' />
              </div>
              <div>
                <Input type='email' placeholder='*Email' />
              </div>
              <div>
                <Input type='text' placeholder='*Phone Number' />
              </div>
              <div className='col-span-2 row-span-2'>
                <Input type='textarea' placeholder='*Description of your wishes' />
              </div>
              <div className='rounded-md border-0 ring-1 ring-inset ring-gray-300 bg-white text-gray-700'>
                <div className='h-[75px] flex items-center justify-start gap-4 pl-4'>
                  <input type='checkbox' className='h-6 w-6' />
                  <label>I'm not a robot</label>
                </div>
              </div>
              <div className='bg-white text-primary h-[50px] flex items-center justify-center rounded-md border-0 ring-1 ring-inset font-bold ring-gray-300'>
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inquiry
