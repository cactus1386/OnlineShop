import React, { useState } from 'react'
import '../assets/css/SideBar.css'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

    return(
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '×' : '☰'}
      </button>
      <div className="sidebar-content">
        <h2>منوی سایدبار</h2>
        <ul>
          <li><a href="#home">خانه</a></li>
          <li><a href="#about">درباره ما</a></li>
          <li><a href="#services">خدمات</a></li>
          <li><a href="#contact">تماس</a></li>
        </ul>
      </div>
    
      </div>
    )
}

export default SideBar;