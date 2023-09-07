import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const styleLink = ({isActive})=>{
    return{
      fontWeight: isActive ? "Bold" : "normal",
      fontSize: isActive ? "24px" : "20px",
      color: isActive ? "red" : "black",
    }
  }

  return (
    <div>
        <nav className='mainNav'>
            <NavLink style={styleLink} to="/">Home</NavLink>
            <NavLink style={styleLink} to="/products">Products</NavLink>
            <NavLink style={styleLink} to="/about">About</NavLink>
            <NavLink style={styleLink} to="/contact">Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar
