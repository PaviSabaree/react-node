import React, { useState } from "react";
import "./register.css"

const Register = () => {

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:"",
    phoneNumber:""
  })

const handleChange=(e)=>{
 const {name, value}= e.target
 setUser({
   ...user,
   [name]:value
 })
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
        <label>Ph.no:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; 
        </label>
        <input type="number"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="phone number" onChange={handleChange}></input><br/><br/>
        <div className="button">
          <button>Register</button>
        </div>
        <div>
          <p className="link">
           Already registered? &ensp;
            <a href="#">Login</a>
          </p>
        </div>
        </div>
    )
}

export default Register;