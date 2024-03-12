import React from 'react'
import Banner_1 from '../../assets/img/Banner_1.png'
import Banner_2 from '../../assets/img/Banner_2.png'
import Banner_3 from '../../assets/img/Banner_3.png'
import Banner_4 from '../../assets/img/Banner_4.png'
import BannerImg from '../../assets/img/Banner.png'
import { IoFlagOutline } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { HiOutlineCalendar } from 'react-icons/hi'
import { MdOutlineSearch } from 'react-icons/md'
const Banner = () => {
  return (
    <div>
      <div className=''>
        <div className=''>
          <img src={BannerImg} alt='' />
        </div>
        <div className='container relative h-32'>
          <div className='absolute inset-x-12 bg-white -mt-6 z-10 border flex items-center h-24 justify-around rounded-md text-gray-400 shadow-lg'>
            <input className='w-60' type='text' placeholder='Where do you want to go....' />
            <div className='flex items-center justify-between w-56 border-l-2 pl-3'>
              <div className=' flex items-center gap-2'>
                <IoFlagOutline />
                <p>Tour type</p>
              </div>
              <IoIosArrowDown />
            </div>
            <div className='flex items-center justify-between w-56 border-l-2 pl-3'>
              <div className=' flex items-center justify-between gap-2'>
                <HiOutlineMapPin />
                <span>Place of departure</span>
              </div>
              <IoIosArrowDown />
            </div>
            <div className='flex items-center justify-between w-56 border-l-2 pl-3'>
              <div className=' flex items-center gap-2'>
                <HiOutlineCalendar />
                <span>Duration</span>
              </div>
              <IoIosArrowDown />
            </div>
            <div className='flex items-center border-2 justify-between w-32 bg-primary text-white p-2 rounded-md shadow-lg'>
              <div>
                <button>Search</button>
              </div>
              <MdOutlineSearch />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='grid grid-cols-4 text-left'>
            <div className='flex gap-4'>
              <img className='h-8' src={Banner_1} alt='' />
              <div className='w-72'>
                <h1 className='font-bold'>Custommizabale by local experts</h1>
                <p>Personalized trip at the original price!</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <img className='h-8' src={Banner_2} alt='' />
              <div className='w-72'>
                <h1 className='font-bold'>Refund Guarantee</h1>
                <p>We believe in our work and promise to give you money back</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <img className='h-8' src={Banner_3} alt='' />
              <div className='w-72'>
                <h1 className='font-bold'>Good Price / Quality</h1>
                <p>95% satisfied more than expected</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <img className='h-8' src={Banner_4} alt='' />
              <div className='w-72'>
                <h1 className='font-bold'>24/7 Local Support</h1>
                <p>We are alway available online to provide assistance at any time </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
