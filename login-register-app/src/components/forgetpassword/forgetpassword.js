import React, { useState }from "react";
import "./forgetpassword.css";
import { useHistory } from "react-router-dom"
import axios from "axios"

const Forgetpassword = () => {

    const history = useHistory()
    
    const forgetpassword=()=>{
        axios.post("http://localhost:8000/forgetpassword", user)
        .then (res=>  {
           alert(res.data.message)
        //    setForgetUser(res.data.user)
         history.push("/resetpassword");
      
      })
    }
    const [user,setForgetUser]=useState({
        email:""
      })
      
      const handleChange=(e)=>{
        const {name,value}=e.target
      setForgetUser({
        ...user,
        [name]:value
      })
      }
      
  
return (
    <div className = "forgetpassword">

        <h1>Forget password</h1>

        <label>Email id:</label>
                <input type="text" name="email" value={user.email} placeholder="Enter your email id" onChange={handleChange}></input>

       
        <div className="button" onClick ={forgetpassword}>Submit</div>
    </div>
)
 }

 export default Forgetpassword;