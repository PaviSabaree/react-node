import React from 'react'
import './Nav-bar.css'

function Navbar() {
    return (
      <>
    
<ul>
  <div className='logo-container'>
  <img className='displayed' src='logo.png'></img>
  </div>
       
        <h2>Alsiraj computer design</h2>
  <li><a href="#home">Home</a></li>
  <li><a href="#client">Client</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#about">Properties</a></li>
  <li><a href="#employee">Employee</a></li>
  <li><a href="#setting">Setting</a></li>
</ul>
      </>
    )
}
export default Navbar;