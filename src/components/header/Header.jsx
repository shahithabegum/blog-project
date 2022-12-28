import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
       <div className="headerTitles">
        <span className="headerTitlesm">React & node</span>
        <span className="headerTitlelg">Blog</span>
       </div>
       <img src="https://th.bing.com/th/id/OIP.OsrKaheHmdqecXVxPcosHwHaEK?pid=ImgDet&rs=1" alt="" className="headerImage" />
    </div>
  )
}

export default Header