import React from 'react'
import {FaApper, FaAws, FaFacebook, FaGithub, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container'>
        <FaFacebook className='network' style={{color:'blue'}}/>
        <FaInstagram className='network' style={{color:'fuchsia'}}/>
        <FaGithub className='network' style={{color:'azure'}}/>
        <FaTiktok className='network' style={{color:'azure'}} />
        <FaTwitter className='network' style={{color:'skyblue'}}/>
    </div>
  )
}

export default Footer
