import Sidebar from '../sidebar/Sidebar'
import './singlePost.css'
import {Link, useLocation} from 'react-router-dom'
import { useEffect,useState ,useContext} from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
const SinglePost = () => {
  const PF='http://localhost:2000/'
  const {user}= useContext(Context)
  const location =useLocation()
  const path=(location.pathname.split('/')[2])
  const [singlePost, setSinglePost] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMood, setUpdateMood] = useState(false)
  useEffect(() => {
  const getpost= async ()=>{
    const res= await axios.get(`http://localhost:2000/api/post/${path}`)
    setSinglePost(res.data);
    setDesc(res.data.desc);
    setTitle(res.data.title)
  }
  getpost()
  }, [path])
 const handleDelete = async()=>{
  try{
    await axios.delete('http://localhost:2000/api/post/'+path)
    window.location.replace('/home')
  }catch(err){}
  
 }
 const handleUpdtae=async(e)=>{
  e.preventDefault()
  try{
      await axios.put(`http://localhost:2000/api/post/${path}`,{
       username:user.username,title,desc
      })
      window.location.reload()
  }catch(err){console.log(err)}
 }
  return (
    <div className='singlepost'>
       <div className="singlepostwarraper">
        {singlePost.photo && <img src={PF+singlePost.photo} 
        alt="singlepost" className="singlepostimg" />}
        {updateMood ? (
          <input type='text' value={title} className="singleposttitleInput" onChange={e=>{setTitle(e.target.value)}} />
        ):(<h1 className="singleposttitle">
        {singlePost.title}
        {
          singlePost.username===user?.username && <div className="singlepostedit">
          <i className="singlepostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMood(true)}></i>
          <i className="singlepostIcon fa-solid fa-trash" onClick={handleDelete}></i>
          </div>
        }
        
    </h1>)}
        
        <div className="singlepostInfo">
            <span className="authorname">
            Author: 
              <Link to={`/?user=${singlePost.username}`}><b>{singlePost.username}</b></Link>
                
            </span>
            <span className="singlepostdate">{new Date(singlePost.createdAt).toDateString()}</span>
        </div>
        {
          updateMood ? <textarea value={desc} className='singlepostdecInput' onChange={e=>{setDesc(e.target.value)}}/>:(<p className="singlepostdec">
          {singlePost.desc}
           </p>)}
           {updateMood &&  <button className='singlepostbutton' onClick={handleUpdtae}>Update</button>}
        
        </div>
       
      
    </div>
    
  )
}

export default SinglePost