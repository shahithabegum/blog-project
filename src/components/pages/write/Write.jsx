import './write.css'
import {useState} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../../context/Context'
const Write = () => {
  const [file, setfile] = useState("")
  const [title, setTitle] = useState("")
  const [dec, setDec] = useState("")
  const {user}=useContext (Context)
   const handleFile = async (e)=>{
       console.log(e.target.files)
       let file=e.target.files[0]
       let formData=new FormData()
       formData.append('img',file)
       const res =await axios.post('http://localhost:2000/api/upload',formData)
       console.log(res)
       if(res.data){
        setfile(res.data.path)
       }
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    let newpost={}
    if(file){
     newpost={
      username:user.username,
      title:title,
      desc:dec,
      photo:file
     }
    }
    const res= await axios.post('http://localhost:2000/api/post/add',newpost)
     window.location.replace('/post/'+res.data._id)
    console.log(newpost.photo)
  }
  
  return (
    <div className='write'>
       <form action="" className="writeform" onSubmit={handleSubmit}>
        <img src={"http://localhost:2000/"+file}
         alt="writeimg" className="writeimg" />
        <div className="writeformgroup">
            <label htmlFor="inputfile">
            <i className="writeicon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='inputfile' style={{display:"none"}} onChange={e=>{handleFile(e)}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
           
        </div>
        
        <div className="writeformgroup">
        
            <textarea type='text' placeholder="Tell Your Story....." className='writeInput writetext' onChange={e=>setDec(e.target.value)}/>
        </div>
        <button className="writesubmit" type='submit'>
            publish
        </button>
       </form>
       
    </div>
  )
}

export default Write