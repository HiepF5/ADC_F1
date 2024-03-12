import React from 'react'
import TitleMain from '../TitleMain/TitleMain'
import ItemF_1 from '../../assets/img/ItemF_1.png'
import ItemF_2 from '../../assets/img/ItemF_2.png'
import ItemF_3 from '../../assets/img/ItemF_3.png'
import ItemF_4 from '../../assets/img/ItemF_4.png'
import ItemFirst from '../ItemFirst/ItemFirst'
const ImageList = [
  {
    id: 1,
    img: ItemF_1,
    title: 'Hotel Service',
    description: 'Best hotels in famous tourist destinations'
  },
  {
    id: 2,
    img: ItemF_2,
    title: 'Car for rent services',
    description: 'Car rental service at good prices from reputable and thoughtful car companies'
  },
  {
    id: 3,
    img: ItemF_3,
    title: 'Visa Services',
    description: 'Fast and cheap Visa service. Comprehensive visa, simple procedures'
  },
  {
    id: 4,
    img: ItemF_4,
    title: 'Fares services',
    description: 'Cheapest air tickets, many attractive promotions'
  }
]
const ServiesNature = () => {
  return (
    <div className='py-10'>
      <div className='container'>
        <TitleMain title='Services of Eco Nature Travel' location='text-center' />
        <div className='flex items-center justify-between'>
          {ImageList.map((data) => (
            <div key={data.id}>
              <ItemFirst data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiesNature
