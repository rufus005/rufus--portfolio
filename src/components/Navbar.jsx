import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
   <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
        <h1 className='mx-2 m-8 w-10 text-2xl tracking-tight'>PORTFOLIO</h1>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
        <button><a href="https://www.linkedin.com/in/rufus-magimai-doss-s-31211b27b" target='_blank'><FaLinkedin /></a></button>
        <button><a href="https://github.com/rufus005/" target='_blank'> <FaGithub /></a></button>
        <button><a href="https://x.com/?lang=en" target='_blank'>  <FaSquareXTwitter /></a></button>
        <button><a href="https://www.instagram.com/rufus_s_am/" target='_blank'><FaInstagram /></a></button>
        
    </div>
   </nav>
  )
}

export default Navbar