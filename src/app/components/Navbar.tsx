import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="Navhover">Milestone 2</div>
      <div className="nav">
        <Link className='Navhover' href='/'>Home</Link>
        <Link className='Navhover' href='/about'>About</Link>
        <Link className='Navhover' href='/contact'>Contact</Link>
      </div>
    </div>
  )
}