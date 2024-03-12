import React from 'react'
import Logo from '../../assets/img/Logo.png'
const Navbar = () => {
  return (
    <div>
      <div className='text-xl font-normal'>
        <div className='container flex justify-between h-24'>
          <div>
            <img src={Logo} alt='' />
          </div>
          <ul className='flex gap-8 items-center'>
            <li>HOME</li>
            <li>DESTINATIONS</li>
            <li>PACKAGE TOURS</li>
            <li>GROUP TOURS</li>
            <li>CRUISES TOURS</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
