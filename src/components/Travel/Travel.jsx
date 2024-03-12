import React from 'react'
import TitleFirst from '../TitleFirst/TitleFirst'

import tripadvisor from '../../assets/img/tripadvisor.png'
import trustpilot from '../../assets/img/trustpilot.png'
import tripadvisor_2 from '../../assets/img/tripadvisor_2.png'
import routard_2 from '../../assets/img/routard_2.png'
import back_2 from '../../assets/img/back_2.png'
import routard from '../../assets/img/routard.png'
const Data = {
  title: 'Eco Travel is highly recommended on',
  description:
    'Embracing the mission of Satisfied more than expected and providing authentic experiences, we have received numerous recommendations on reputable travel forums'
}
const Travel = () => {
  return (
    <div className='relative'>
      <img className='relative top-0 left-0' src={back_2} alt='' />
      <div className='container'>
        <div className='absolute z-10 top-8 text-center'>
          <TitleFirst title={Data.title} description={Data.description} location='text-center' />
        </div>

        <div className='absolute top-36 text-center '>
          <div className='grid grid-cols-3 text-center'>
            <div className='flex flex-col items-center justify-center bg-white m-2'>
              <img src={tripadvisor} alt='' />
              <span>
                Exceptional discoveries, excellent guide, impeccable organization. Personalized sup-port based on
                listening and meeting needs. Constant availability. Very reputable travel agency in Vietnam, Highly
                recommended
              </span>
              <h2 className='font-bold'>Tripadvisor.com @excellent</h2>
            </div>
            <div className='flex flex-col items-center justify-center bg-white m-2'>
              <img src={routard} alt='' />
              <span>
                A reputable and highly recommended local travel agency in Hanoi, Vietnam. The company has made every
                effort to always listen to customers and meet our request at competitive prices
              </span>
              <h2 className='font-bold'>Reviews on Routard Guide</h2>
            </div>
            <div className='grid grid-rows-2'>
              <div className='flex flex-col items-center justify-center bg-white m-2'>
                <img src={trustpilot} alt='' />
              </div>
              <div className='grid grid-cols-2'>
                <div className='flex flex-col items-center justify-center bg-white m-2'>
                  <img src={tripadvisor_2} alt='' />
                </div>
                <div className='flex flex-col items-center justify-center bg-white m-2'>
                  <img src={routard_2} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel
