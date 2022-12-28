import './login.css'
import axios from "axios";
import { useEffect, useState,useContext } from 'react';
import { Context } from '../../../context/Context';

const Login = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const{user,dispatch,isFetching}= useContext(Context);

const handleSubmit= async (e)=>{
  e.preventDefault();
  dispatch({type:"LoginStart"});
  try{
    const res = await axios.post('http://localhost:2000/api/auth/login',{
      email:email,
      password:password
    });
    dispatch({type:"LoginSuccess",payload:res.data});
  }catch(err){
    dispatch({type:"LoginFailure"});
  }
 };
 console.log(user)
  return (
    <div className='login'>
      <span className="logintitle">LOGIN</span>
        <form className="loginform" onSubmit={handleSubmit} >
          <label>Email</label>
          <input type="text" className='Input' placeholder="Enter your Email...." onChange={e=>{setEmail(e.target.value)}}/>
          <label>Password</label>
          <input type="password" className='Input' placeholder="Enter your Password...."  onChange={e=>{setPassword(e.target.value)}}/>
          <button className="loginbutton" type='submit'>Login</button>
        </form>
        <button className="loginRegbutton"><a href='/register'> Register</a></button>
    </div>
  )
}

export default Login