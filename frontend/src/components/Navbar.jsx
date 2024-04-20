import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='container'>
      <input type="text" style={{padding: '5px 20px', borderRadius: '40px 0 0 40px'}} />
      <button style={{borderRadius:'0 40px 40px 0', backgroundColor:'grey', margin:'1px'}}>
        <FaSearch/>
      </button>
    </div>
  )
}

export default Navbar
