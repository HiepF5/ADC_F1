import React from 'react'
import { HiOutlinePhone } from 'react-icons/hi'
import { IoMailOutline } from 'react-icons/io5'
import { FaEarthAfrica } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { FaFacebookF } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
const Info = () => {
  return (
    <div className='bg-primary text-white'>
      <div className='container flex justify-between items-center h-8'>
        <div className='flex items-center gap-3'>
          <HiOutlinePhone />
          <p>++84 903 589 689</p>
          <IoMailOutline />
          <p>info@ecotravelvietnam.com</p>
        </div>
        <div className='flex items-center gap-4'>
          <FaEarthAfrica />
          <p>English</p>
          <IoIosArrowDown />
          <div className='border-l-2 pl-3'>
            <FaFacebookF />
          </div>
          <div className='border-l-2 pl-3'>
            <FaTwitter />
          </div>
          <div className='border-l-2 pl-3'>
            <FaYoutube />
          </div>
          <div className='border-l-2 pl-3'>
            <FaInstagram />
          </div>
          <div className='border-l-2 pl-3'>
            <FaTiktok />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
