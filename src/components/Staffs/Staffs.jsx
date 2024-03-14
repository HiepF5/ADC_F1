import React from 'react'
import TitleFirst from '../TitleFirst/TitleFirst'
import S_1 from '../../assets/img/S_1.png'
import S_2 from '../../assets/img/S_2.png'
import S_3 from '../../assets/img/S_3.png'
import S_4 from '../../assets/img/S_4.png'
import Slider from 'react-slick'
import ItemAround from '../ItemAround/ItemAround'
const Data = {
  title: 'Dedicated Staffs',
  description:
    'With a team of enthusiastic and committed staff members, we are always eager to listen to your opinions and requirements!'
}
const ImageList = [
  {
    id: 1,
    img: S_1,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 2,
    img: S_2,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 3,
    img: S_3,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 4,
    img: S_4,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 5,
    img: S_1,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 6,
    img: S_2,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  },
  {
    id: 7,
    img: S_3,
    title: 'Mr. Hoang Hung',
    describe: 'Marketing Manager'
  }
]
const Staffs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <div className='pt-12 relative'>
      <div>
        <div className='container'>
          <TitleFirst title={Data.title} description={Data.description} location='text-center' />
          <Slider {...settings}>
            {ImageList.map((data) => (
              <ItemAround key={data.id} data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Staffs
