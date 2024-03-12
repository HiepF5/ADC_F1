import React from 'react'
import Best_1 from '../../assets/img/Best_1.png'
import Best_2 from '../../assets/img/Best_2.png'
import Best_3 from '../../assets/img/Best_3.png'
import Slider from 'react-slick'
import TitleMain from '../TitleMain/TitleMain'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import CardSecond from '../CardSecond/CardSecond'
const ImageList = [
  {
    id: 1,
    img: Best_1,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 2,
    img: Best_2,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 3,
    img: Best_3,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 4,
    img: Best_1,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 5,
    img: Best_2,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 6,
    img: Best_3,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 7,
    img: Best_1,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  }
]
const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div>
      <div className='container pt-5 '>
        <TitleMain title='Best-seller Tours' location='text-center' />
        <div className='slider-container mt-3'>
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <CardSecond data={data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
