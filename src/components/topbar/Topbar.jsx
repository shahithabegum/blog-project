
import React,{useContext} from 'react'
import { Context } from '../../context/Context'


import './Topbar.css'

const Topbar = () => {
 const PF='http://localhost:2000/' 
  const {user,dispatch}=useContext (Context)
  
  const handleLogout =()=>{
     dispatch({type:"Logout"})
    
    }
    
  return (
    
    <div className='top'>
        <div className="topleft"> 
        <a href='https://www.facebook.com/'><i className="topIcon fa-brands fa-square-facebook"></i></a>
        <a href='https://twitter.com/?lang=en-in'><i className="topIcon fa-brands fa-square-twitter"></i></a>
        <a href='https://www.instagram.com/'><i className="topIcon fa-brands fa-instagram"></i></a>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="listitem"><a href='/home'> Home</a></li>
                <li className="listitem"><a href='/about'> About</a></li>
                <li className="listitem"><a href='/write'> Write</a></li>
                <li className="listitem"><a href='/contact'> Contact</a></li>
                <li className="listitem" ><a href='/' onClick={handleLogout}> {user && "Logout"}</a></li>
            </ul>
        </div>
        <div className="topringth">
          { 
             user ?( <a href='/setting'><img src={PF+user.profilePic}
              alt="dp" className='topbarimg'/></a>) :(
                <ul className='toplist'>
                  <li className="listitem"><a href='/'> Login</a></li>
                  <li className="listitem "><a href='/register'> Register</a></li>
                </ul>
               )
          
          }
           
            <i className=" SearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar