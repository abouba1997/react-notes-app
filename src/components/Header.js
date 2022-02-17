import React from 'react'

const Header = ({toggleBac}) => {
  return (
    <div className='navbar'>
        <span className='header-text'>NOTES</span>
        <button className='header-button' onClick={toggleBac}>Toggle Mode</button>
    </div>
  )
}

export default Header;