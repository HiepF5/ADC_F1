import React from 'react'
import Our_1 from '../../assets/img/Our_1.png'
import Our_2 from '../../assets/img/Our_2.png'
import Our_3 from '../../assets/img/Our_3.png'
import Our_4 from '../../assets/img/Our_4.png'
import TitleMain from '../TitleMain/TitleMain'
import Slider from 'react-slick'
import Card from '../Card/Card'
const ImageList = [
  {
    id: 1,
    img: Our_1,
    title: 'ThaiLand - Bangkok - Pattaya Tour from Hanoi 2023',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 2,
    img: Our_2,
    title: 'Cambodia Tour Phnom Penh - Siem Reap from Hanoi 2023',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 3,
    img: Our_3,
    title: 'Travel to Singapore - Malaysia - Indonesia flying Vietnam Airlines',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 4,
    img: Our_4,
    title: 'Thailand - Bangkok - Pattaya Tour from Hanoi 2023',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 5,
    img: Our_1,
    title: 'ThaiLand - Bangkok - Pattaya Tour from Hanoi 2023',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 6,
    img: Our_2,
    title: 'Cambodia Tour Phnom Penh - Siem Reap from Hanoi 2023',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  },
  {
    id: 7,
    img: Our_3,
    title: 'Travel to Singapore - Malaysia - Indonesia flying Vietnam Airlines',
    time: '4 Days 3 Nights',
    price: '$60 USD'
  }
]
const OurIndochina = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }
  return (
    <div className='pt-32'>
      <div className=' relative'>
        {/* <img className='absolute -top-16 z-0 left-0' src={Background} alt='' /> */}
        <div className='container '>
          <TitleMain className='' title='OurIndochina Tours' location='text-left' />
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

export default OurIndochina
