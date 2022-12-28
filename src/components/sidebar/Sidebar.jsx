import axios from 'axios'
import React,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './sidebar.css'

const Sidebar = () => {
  const PF='http://localhost:2000/' 
  const [cats, setCats] = useState([])
  useEffect(() => {
   const getcats= async ()=>{
    const res= await axios.get('http://localhost:2000/api/cat/getall')
    setCats(res.data)
   }
   getcats()
  }, [])
  const {user}=useContext(Context)
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebartitle'>ABOUT ME</span>
            <img className='sidebarImg'src={PF+user.profilePic} alt="" />
            <p><b>{user.username}</b></p>
        </div>
        <div className="sidebarItem">
        <span className='sidebartitle'>CATOGORIES</span>
        <ul className='sidebarList'>
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`}> <li>{c.name}</li></Link>
          
        ))}
        </ul>
        </div>
        <div className="sidebarItem">
        <span className='sidebartitle'>SOCIAL MEDIA</span>
        <div className="sidebarSocial">
        <a href='https://www.facebook.com/'><i className="topIcon fa-brands fa-square-facebook"></i></a>
        <a href='https://twitter.com/?lang=en-in'><i className="topIcon fa-brands fa-square-twitter"></i></a>
        <a href='https://www.instagram.com/'><i className="topIcon fa-brands fa-instagram"></i></a>
        </div>
        </div>
    </div>
  )
}

export default Sidebar