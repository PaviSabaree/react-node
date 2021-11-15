import React, { useState } from "react";
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Login = ({ setLoginUser})=> {



  const history = useHistory()

const [user,setUser]=useState({
  email:"",
  password:""
})

const handleChange=(e)=>{
  const {name,value}=e.target
setUser({
  ...user,
  [name]:value
})
}

const login=()=>{
  axios.post("http://localhost:8000/login", user)
  .then (res=>  {
    alert(res.data.message)
      setLoginUser(res.data.user)
   history.push("/");

})
}

//
    return (
        <div className='login'>
            <h1>Login</h1>
            <div className="container">
            <label>Email id:</label>
                <input type="text" name="email" value={user.email} placeholder="Enter your email id" onChange={handleChange}></input>
                <label>Password: </label>
                <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
                </div>
            
            <p className="link">
            <a href="/forgetpassword">Forget Password</a><br/> </p>
            
                <div className="button" onClick={login}>
                    Login
                </div>

              <p className="link1">  
              New user? &ensp;
            <a href="/register">Register</a></p>
         
            </div>
    )
}

export default Login;