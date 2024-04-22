import React from 'react'
import { FaApple, FaCocktail, FaHamburger } from 'react-icons/fa'
const Header = () => {
  
  return (
    <div className='container'>
      <div className="sub-container">
        <FaApple style={{color:'green', width: '60px', height:'60px', marginRight:'10px'} }/>
          <h2 className='marca'>Delicious Healthy Catering</h2>
        <FaCocktail style={{color:'red', width: '60px', height:'60px', marginLeft:'10px'} }/>
      </div>
    </div>
  )
}

export default Header
