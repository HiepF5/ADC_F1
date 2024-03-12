import React from 'react'
import Crui_1 from '../../assets/img/Crui_1.png'
import Crui_2 from '../../assets/img/Crui_2.png'
import Crui_3 from '../../assets/img/Crui_3.png'
import Slider from 'react-slick'
import TitleMain from '../TitleMain/TitleMain'
import CardThird from '../CardThird/CardThird'
const ImageList = [
  {
    id: 1,
    img: Crui_1,
    title: 'Ambassador Cruise 2 days 1 night',
    time: '2 Days 1 Nights',
    price: '$60 USD'
  },
  {
    id: 2,
    img: Crui_2,
    title: 'La Regina Cruise tour 2 dáy 1 night',
    time: '2 Days 1 Nights',
    price: '$60 USD'
  },
  {
    id: 3,
    img: Crui_3,
    title: 'Ambassador Cruise 2 days 1 night',
    time: '2 Days 1 Nights',
    price: '$60 USD'
  },
  {
    id: 4,
    img: Crui_1,
    title: 'Ambassador Cruise 2 days 1 night',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 5,
    img: Crui_2,
    title: 'La Regina Cruise tour 2 dáy 1 night',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 6,
    img: Crui_3,
    title: 'Ambassador Cruise 2 days 1 night',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 7,
    img: Crui_1,
    title: 'Ambassador Cruise 2 days 1 night',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  }
]
const CruiseTours = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div className='container pt-12 '>
      <TitleMain title='Cruise Tours' location='text-left' />
      <div className='mt-3 '>
        <Slider {...settings} className=' '>
          {ImageList.map((data) => (
            <CardThird key={data.id} data={data} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CruiseTours
