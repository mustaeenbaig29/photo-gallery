import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer_section">
      <h3>About Me</h3>
      <p>Hi, I am Mustaeen Baig, a passionate web developer. I have built this photo gallery website.</p>
    </div>
  
    <div class="footer_section">
      <h3>Contact</h3>
      <p>9482900560</p>
      <p>mustaeenbaig02@gmail.com</p>
    </div>
  
    <div class="footer_section">
      <h3>Quick Links</h3>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer
