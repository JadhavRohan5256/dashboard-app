import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='header-wrapper'>
      <div className='header-profile'>
        <a href="#">
          <span>RohanJadhav</span>
          <img src="favicon.ico" alt="" />
        </a>
      </div>
      <div className='header-bottom'>
        <div className="header-bottom-left-wrapper">
        <div className='header-bottom-left'>
          <a href="#"> My Project (0) </a>
          <a href="#">Explore</a>
          <div className="animation"></div>
        </div>
        </div>
        <div className='header-search'>
          <SearchIcon />
          <input
            type="text"
            name="search"
            id="search"
          />
        </div>
      </div>
    </div>
  )
}

export default Header