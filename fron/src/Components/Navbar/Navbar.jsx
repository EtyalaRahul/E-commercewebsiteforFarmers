import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to track if the dropdown is open
  const { getTotalCartItems } = useContext(ShopContext);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>GreenCart</p>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <ul className="nav-menu-mobile">
          <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }}>
            <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          </li>
          <li onClick={() => { setMenu("seeds"); setIsMenuOpen(false); }}>
            <Link style={{ textDecoration: 'none' }} to='/seeds'>Seeds</Link>
          </li>
          <li onClick={() => { setMenu("fertilizers"); setIsMenuOpen(false); }}>
            <Link style={{ textDecoration: 'none' }} to='/fertilizers'>Fertilizers</Link>
          </li>
          <li onClick={() => { setMenu("irrigation"); setIsMenuOpen(false); }}>
            <Link style={{ textDecoration: 'none' }} to='/irrigation'>Irrigation</Link>
          </li>
        </ul>
      )}

      <ul className="nav-menu">
        <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("seeds") }}><Link style={{ textDecoration: 'none' }} to='/seeds'>Seeds</Link>{menu === "seeds" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("fertilizers") }}><Link style={{ textDecoration: 'none' }} to='fertilizers'>Fertilizers</Link>{menu === "fertilizers" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("irrigation") }}><Link style={{ textDecoration: 'none' }} to='irrigation'>Irrigation</Link>{menu === "irrigation" ? <hr /> : <></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
