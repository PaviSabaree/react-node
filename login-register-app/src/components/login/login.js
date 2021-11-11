import React, { useState } from "react";
import "./login.css"
import axios from "axios"


const Login = ({ setLoginUser})=> {

 

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
    // history.push("/")
})
}

    return (
        <div className='login'>
            <h1>Login</h1>
            <label>Email id:&ensp;&ensp;&ensp;</label>
                <input type="text" name="email" value={user.email} placeholder="Enter your email id" onChange={handleChange}></input><br/><br/>
                <label>Password:&ensp; </label>
                <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input><br/><br/>
                <div className="button" onClick={login}>
                    <button>Login</button>
                </div>
                <p className="link">
            <a href="#">Forget Password</a><br/>
              New user? &ensp;
            <a href="/register">Register</a>
          </p>
            </div>
    )
}

export default Login;