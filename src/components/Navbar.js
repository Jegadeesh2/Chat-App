import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="sidebar-logo"> J Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" alt="user" className='user-image' />
        <span className='user-name'>jega</span>
        <button className='logout-btn' onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar