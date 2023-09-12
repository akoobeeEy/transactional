import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='py-10 text-white bg-blue-950 '>
        <div className="container">
      <nav className='flex justify-around'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/debts'>Debts</NavLink>
          <NavLink to='transactional'>Tranactional</NavLink>
      </nav>
        </div>
    </header>
  )
}

export default Header