import React from 'react'
import Navbar from './Navbar'
import { FaApple, FaBowlingBall, FaBreadSlice, FaCheese, FaFish, FaPizzaSlice, FaWineBottle } from 'react-icons/fa'
const Header = () => {
  return (
    <div className='container'>
        <div className="sub-container">
        <FaApple style={{color:'green', width: '60px', height:'60px', marginRight:'10px'} }/>
        <h2 style={{color: 'white'}}>Bogotá</h2>
        <h2 style={{color:'red'}}>Casting</h2>
        <FaPizzaSlice style={{color:'orange', width: '60px', height:'60px', marginLeft:'10px'} }/>
    </div>
        
        <Navbar/>
    </div>
  )
}

export default Header
