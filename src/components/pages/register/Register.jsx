import axios from 'axios'
import { useState } from 'react'
import './register.css'
const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:2000/api/auth/register", {
        username:username,
        email:email,
        password:password,
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='Register'>
      <span className="Registertitle">Register</span>
        <form className="Registerform" onSubmit={handleSubmit}>
        <label>user Name</label>
          <input type="text" className='Input' placeholder="Enter your UserName...." onChange={e=>{setUsername(e.target.value)}}/>
          <label>Email</label>
          <input type="text" className='Input' placeholder="Enter your Email...." onChange={e=>{setEmail(e.target.value)}}/>
          <label>Password</label>
          <input type="password" className='Input' placeholder="Enter your Password...." onChange={e=>{setPassword(e.target.value)}}/>
          <button className="Registerbutton" type='submit'>Register</button>
        </form>
        <button className="Registerlogbutton"><a href='/'> Login</a></button>
    </div>
  )
}

export default Register