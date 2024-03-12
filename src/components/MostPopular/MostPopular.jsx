import React from 'react'
import TitleMain from '../TitleMain/TitleMain'
import Background from '../../assets/img/Most_back.png'
import Most_1 from '../../assets/img/Most_1.png'
import Most_2 from '../../assets/img/Most_2.png'
import Most_3 from '../../assets/img/Most_3.png'
import Most_4 from '../../assets/img/Most_4.png'
import Card from '../Card/Card'
import Slider from 'react-slick'
const ImageList = [
  {
    id: 1,
    img: Most_1,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 2,
    img: Most_2,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 3,
    img: Most_3,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 4,
    img: Most_4,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 5,
    img: Most_1,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 6,
    img: Most_2,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 7,
    img: Most_3,
    title: 'Da Nang Tour 3D2N: BA NA -Hue Ancient Capital - Phong Nha Cave',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  }
]
const MostPopular = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <div className='pt-16 relative'>
      <div className='relative'>
        <img className='absolute -top-4 z-0 left-0' src={Background} alt='' />
        <div className='container relative'>
          <TitleMain title='Our Most Popular Tours' location='text-left' />
          <Slider {...settings} className='pt-8'>
            {ImageList.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MostPopular
