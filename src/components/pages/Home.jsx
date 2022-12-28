import React,{useState,useEffect} from 'react'
import Header from '../header/Header';
import Post from '../post/Post';
import Sidebar from '../sidebar/Sidebar';
import'./Home.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [posts, setPosts] = useState([])
  const {search}=useLocation();
  console.log(search)
  useEffect(() => {
     const fetchpots = async ()=>{
    const res=  await axios.get(`http://localhost:2000/api/post`+search)
      setPosts(res.data)
     }
     fetchpots()
  }, [search])
  return (
    <>
     <Header />
     <div className='home'>
       <Post posts={posts}/>
       <Sidebar />
      
    </div>
    </>
   
  )
}

export default Home