import React, { useState } from "react";
import "./register.css"
import axios from 'axios'
import { useHistory } from "react-router-dom"

const Register = () => {

  const history = useHistory()


  const [user,setUser]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    reEnterPassword:""
    
  })

const handleChange=(e)=>{
 const {name, value}= e.target
 setUser({
   ...user,
   [name]:value
 })
}

const register= ()=>{
  const {name, email, phoneNumber, password, reEnterPassword} = user
  if(user && email &&phoneNumber && password && (password===reEnterPassword)){
    axios.post("http://localhost:8000/register", user)
   .then (res=>  {
    alert(res.data.message)
     history.push("/login")
})

  } else {
    alert ("invalid input")
  }
  
}

    return(
        <div className='register'>
        <h1>Register</h1>
       <div className='container'> 
        <label>Username:
        </label>
        <input type="text" 
        name="name"
        value={user.name} 
        placeholder="Enter your name" onChange={handleChange}>
          </input>

        <label>Email id:
          </label>
        <input type="text" 
        name="email"
        value={user.email}
        placeholder="Enter your email id" onChange={handleChange}></input>

        
           <label>Ph.no: 
        </label>
           <input type="number"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="Phone number" onChange={handleChange}></input>

        <label>Password
           </label>
        <input type="password" 
        name="password"
        value={user.password}
        placeholder="Enter your password" onChange={handleChange}></input>

        <label>Re-enterPassword:
        </label>
        <input type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter password" onChange={handleChange}></input>
      
       </div>
        <div className="button" onClick={register}>
          Register
        </div>
        <div>
          <p className="link">
           Already registered? &ensp;
            <a href="/login">Login</a>
          </p>
        </div>
        </div>
    )
}

export default Register;