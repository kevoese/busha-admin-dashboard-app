import React from 'react';
import './Sidebar.scss';
import SidebarMenu from '../SidebarMenu';
import menuDatas from './fixture'

const Sidebar = () => {

return(
  <div className="side-bar">
    <div className="side-bar__header">
      <div className="side-bar__header__icon">
        <p>B</p>
      </div>
      <div className="side-bar__header__bussines-name">Business name </div>
    </div>
    <ul className="side-bar__side-menu">
    {menuDatas.map(({title, icon, path}, index)=> <SidebarMenu path={path} Icon=
    {icon} title={title} key={index} /> )}
    </ul>
    <div className="side-bar__accept-btn">  
      <button>
        <img src="https://res.cloudinary.com/store-manager/image/upload/v1569154389/Bitmap_Copy.png" alt=""/>
        <span>Accept payment</span> 
      </button>
    </div>
  </div>
)
}

export default Sidebar;