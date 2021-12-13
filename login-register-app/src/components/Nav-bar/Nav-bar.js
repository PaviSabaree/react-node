import React from 'react'
import './Nav-bar.css'


function Navbar() {
 
    return (
      <div className='nav-bar'>
      <ul>
    <div className='logo-container'>
    <img className='displayed' src='logo.png'></img>
    </div>
         <h2>Alsiraj computer design</h2>
    <li><a href="#home">Home</a></li>
    <li><a href="#client">Client</a>
    <div className='sub-menu-1'>
      <ul>
      <li><a href="#">Client Information</a>
      <div className='sub-menu-2'>
      <ul>
      <li><a href="/individualinfo">Individuals</a></li>
    <li><a href="#">Institutions</a></li>
    </ul>
    </div>
    </li>
    <li><a href="#">Client Application</a></li>
    <li><a href="#">client Properties</a></li>
    <li><a href="#">Client Payment</a></li>
      </ul>
    </div>
    </li>
    <li><a href="#services">Services</a>
    <div className='sub-menu-1'>
      <ul>
      <li><a href="#">Leasing Service</a></li>
    <li><a href="#">Buying & Selling</a></li>
    <li><a href="#">Maintenances</a></li>
    <li><a href="#">Management</a></li>
    <li><a href="#">Consulting Study</a></li>
      </ul>
    </div>
    
    </li>
    <li><a href="#properties">Properties</a>
    <div className='sub-menu-1'>
      <ul>
      <li><a href="#">Villas & Apartment</a></li>
    <li><a href="#">Buying & Tower</a></li>
    <li><a href="#">Warehouse & Shops</a></li>
    <li><a href="#">Lands</a></li>
    <li><a href="#">Forms</a></li>
    <li><a href="#">Factories</a></li>
      </ul>
    </div>
    </li>
    <li><a href="#employee">Employee</a></li>
    <li><a href="#setting">Setting</a></li>
  </ul>
  
  </div>
    )
}
export default Navbar;