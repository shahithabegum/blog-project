import './settings.css'
import Sidebar from '../../sidebar/Sidebar'
import { Context } from '../../../context/Context'
import { useContext,useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../../config/config'
const Settings = () => {
  const {user,dispatch} = useContext(Context)
  const [username, setUsername] = useState("")
  const[email,setEmail]=useState("")
  const [password, setPassword] = useState()
  const [success, setSuccess] = useState(false)
  const [file, setfile] = useState(null)
  const PF='http://localhost:2000/'
  const handleFile = async (e)=>{
    console.log(e.target.files)
    let file=e.target.files[0]
    let formData=new FormData()
    formData.append('img',file)
    const res =await axios.post(BASE_URL+'api/upload',formData)
    console.log(res)
    if(res.data){
     setfile(res.data.path)
    }
}
const handleSubmit= async(e)=>{
  e.preventDefault();
  dispatch({type:"UpdateStart"})
  let updateUser={
    username,
    email,
    password,
    profilePic:file,
  
  }
  
  try{
   const res=await axios.put(BASE_URL+`api/user/update/${user._id}`,updateUser)
   if(res.data){
    console.log(res.data)
   dispatch({type:"UpdateSuccess",payload:res.data})
    setSuccess(true)
   }
   else{
    setSuccess(false)
    dispatch({type:"UpdateFailure"})
   }
   
  }catch(err){dispatch({type:"UpdateFailure"})}
}
const handleDelete =async ()=>{
  await axios.delete(BASE_URL+`api/user/delete/${user._id}`)
  dispatch({type:"Logout"})
  
}
console.log(success)
console.log("userid"+user._id)
  return (
    <div className='settings'>
       <div className="setingswrapper">
        <div className="settingtitle">
            <span className="settingUpdate">Update your Account</span>
            <span className="settingdelete" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingform" onSubmit={handleSubmit}>
        <label>Profile Picture</label>
            <div className="settingpp">
            
            <img src={file ? PF+file : user.profilePic} alt="dp" className="settingimg" />
            <label htmlFor='fileinput'><i className="settingIcon fa-regular fa-user"></i></label>
            <input type='file' id='fileinput' style={{display:"none"}}  onChange={e=>{handleFile(e)}}/>
            </div>
            <label>User Name</label>
            <input type="text" placeholder={user.username} onChange={e=>{setUsername(e.target.value)}}/>
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={e=>{setEmail(e.target.value)}}/>
            <label>password</label>
            <input type="password" placeholder="enter your password" onChange={e=>{setPassword(e.target.value)}}/>
            <button className='settingSubmit' type='submit'>update</button>
            {success && <span style={{color:"green",textAlign:"center"}}>Profile has been Updated </span>}
        </form>
       </div>
         <Sidebar />
    </div>
  )
}

export default Settings