import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className ="navbar">
        <div className="navbar-logo">
            <p>Logo</p>
        </div>
        <div className='navbar-link'>
        <ul >
            <li><a href="#">Placas</a></li>
            <li><a href="#">Monitores</a></li>
            <li><a href="#">Procesador</a></li>
        </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar;