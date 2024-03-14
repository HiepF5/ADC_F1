import React from 'react'
import TitleMain from '../TitleMain/TitleMain'
import blog_1 from '../../assets/img/blog_1.png'
import blog_2 from '../../assets/img/blog_2.png'
import blog_3 from '../../assets/img/blog_3.png'
import blog_4 from '../../assets/img/blog_4.png'
import { AiOutlineClockCircle } from 'react-icons/ai'
const ImageList = [
  {
    id: 1,
    img: blog_1,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 2,
    img: blog_2,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 3,
    img: blog_3,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 4,
    img: blog_4,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  }
]
const Travelblog = () => {
  return (
    <div className='relative'>
      <div>
        <div className='relative'>
          <TitleMain title='Travel Blog' location='text-center' />
        </div>
        <div className='grid grid-cols-2 gap-5 pt-10 container mx-auto'>
          <div>
            <img src={blog_1} alt='' />
            <h1 className='font-bold pt-8'>Explore Moc Chau Tourism Lunar New Year Tour: Colorful Experience</h1>
            <div className='flex gap-2 items-center'>
              <AiOutlineClockCircle />
              <p>02/02/2024</p>
            </div>
          </div>
          <div className='grid grid-rows-3 gap-y-5 '>
            <div className='flex row-span-1 h-[125px] gap-2 '>
              <img src={blog_2} alt='' />
              <div className=''>
                <h1 className='font-bold'>Vietnam Travel notes for overseas Vietnamese who have just returned home</h1>
                <div className='flex gap-2 items-center'>
                  <AiOutlineClockCircle />
                  <p>02/02/2024</p>
                </div>
              </div>
            </div>
            <div className='flex row-span-1  h-[125px] gap-2 '>
              <img src={blog_3} alt='' />
              <div className=''>
                <h1 className='font-bold'>Travel to the hottest 2024 New Year Holiday destinations in the North</h1>
                <div className='flex gap-2 items-center'>
                  <AiOutlineClockCircle />
                  <p>02/02/2024</p>
                </div>
              </div>
            </div>
            <div className='flex row-span-1 h-[125px] gap-2 '>
              <img src={blog_4} alt='' />
              <div className=''>
                <h1 className='font-bold'>10 địa điểm du lịch ở Mù Cang Chải không nên bỏ qua</h1>
                <div className='flex gap-2 items-center'>
                  <AiOutlineClockCircle />
                  <p>02/02/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travelblog
