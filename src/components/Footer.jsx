import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='justify-center flex space-x-5 m-3'>
        <a href='https://www.instagram.com/adom_fosu/'> 
        <BsInstagram size={40} className='cursor-pointer'/>
        </a>
        <a href='https://web.facebook.com/adom.fosu.1/'>
        <FaFacebookF size={40} className='cursor-pointer' />
        </a>
        <a href='https://wa.me/233556840595'>
        <BsWhatsapp size={40} className='cursor-pointer'/>
        </a>
        
        

    </div>
  )
}

export default Footer