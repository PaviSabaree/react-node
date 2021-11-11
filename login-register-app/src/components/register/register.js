import React, { useState } from "react";
import "./register.css"
import axios from 'axios'

const Register = () => {

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
    // history.push("/login")
})

  } else {
    alert ("invalid input")
  }
  
}

    return(
        <div className='register'>
        <h1>Register</h1>
        
        <label>Username:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        </label>
        <input type="text" 
        name="name"
        value={user.name} 
        placeholder="Enter your name" onChange={handleChange}>
          </input><br/><br/>

        <label>Email id:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          </label>
        <input type="text" 
        name="email"
        value={user.email}
        placeholder="Enter your email id" onChange={handleChange}></input><br/><br/>

        
           <label>Ph.no:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 
        </label>
           <input type="number"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="phone number" onChange={handleChange}></input><br/><br/>

        <label>Password:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
           </label>
        <input type="text" 
        name="password"
        value={user.password}
        placeholder="Enter your password" onChange={handleChange}></input><br/><br/>

        <label>Re-enterPassword:&ensp;&ensp;&ensp; 
        </label>
        <input type="text"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter password" onChange={handleChange}></input><br/><br/>
      
       
        <div className="button" onClick={register}>
          <button>Register</button>
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