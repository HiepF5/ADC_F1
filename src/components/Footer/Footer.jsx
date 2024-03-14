import React from 'react'
import footer_1 from '../../assets/img/footer_1.png'
import footer_2 from '../../assets/img/footer_2.png'
import footer_3 from '../../assets/img/footer_3.png'
import van from '../../assets/img/van.png'
import { FaFacebookF } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { CiYoutube } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { FaTiktok } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <div className='relative'>
        <div className=' flex justify-center items-center'>
          <img className='relative inset-0 mx-auto z-0 left-0 h-full' src={van} alt='' />
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <div className='grid grid-cols-5 container'>
            <div>
              <h1 className='pb-5 font-bold text-md text-primary pt-20'>PACKAGE TOURS</h1>
              <p>Viet Nam</p>
              <p>Cambodia</p>
              <p>Laos</p>
            </div>
            <div>
              <h1 className='pb-5 font-bold text-md text-primary pt-20'>CRUISES TOURS</h1>
              <p>Ha Long bay Cruises</p>
              <p>Mekong detal Cruises</p>
            </div>
            <div>
              <h1 className='pb-5 font-bold text-md text-primary pt-20'>DESTINATIONS</h1>
              <p>Viet Nam</p>
              <p>Cambodia</p>
              <p>Laos</p>
            </div>
            <div>
              <h1 className='pb-5 font-bold text-md text-primary pt-20'>RESOURCES</h1>
              <p>Term & Conditions</p>
              <p>Payment</p>
              <p>Travel Guide</p>
              <p>Map</p>
              <p>Travel FAQs</p>
              <p>Links</p>
              <p>Travel Blog</p>
            </div>
            <div className='text-right text-white bg-primary px-4 pt-20 rounded-b-2xl z-10'>
              <h1 className='pb-5 font-bold text-md '>ABOUT US</h1>
              <p>Introduction</p>
              <p>Eco nature team</p>
              <p>Responsible Travel</p>
              <p>Our projects</p>
              <p>Donations we have done</p>
              <p>Eco Business Licence</p>
              <div className='flex items-center justify-center py-10 gap-3'>
                <div className='relative h-8 w-8 rounded-full border border-white overflow-hidden flex items-center justify-center'>
                  <FaFacebookF className='h-5 w-5' />
                </div>
                <div className='relative h-8 w-8 rounded-full border border-white overflow-hidden flex items-center justify-center'>
                  <CiTwitter className='h-5 w-5' />
                </div>
                <div className='relative h-8 w-8 rounded-full border border-white overflow-hidden flex items-center justify-center'>
                  <CiYoutube className='h-5 w-5' />
                </div>
                <div className='relative h-8 w-8 rounded-full border border-white overflow-hidden flex items-center justify-center'>
                  <CiInstagram className='h-5 w-5' />
                </div>
                <div className='relative h-8 w-8 rounded-full border border-white overflow-hidden flex items-center justify-center'>
                  <FaTiktok className='h-5 w-5' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='container'>
          <div className='flex items-center'>
            <div className=' flex items-center gap-8'>
              <img src={footer_1} alt='' />
              <img src={footer_2} alt='' />
              <img src={footer_3} alt='' />
            </div>
            <div className='pl-28'>
              <p>Eco Travel Co.,Ltd - Business License No: 0701. Issued by VNAT</p>
              <p>Copyright &copy; 2021 by EcoTravelVietnam.com - All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
