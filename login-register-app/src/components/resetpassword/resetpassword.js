import React, { useState }from "react";
import "./resetpassword.css";
import { useHistory } from "react-router-dom"
import axios from "axios"

const Resetpassword = () => {

    const history = useHistory()
    
    const resetpassword=()=>{
        const {password}=user
        axios.post("http://localhost:8000/resetpassword", user)
        .then (res=>  {
           alert(res.data.message)
        //    setResetUser(res.data.user)
         history.push("/login");
      
      })
    }
    const [user,setResetUser]=useState({
        password:""
      })
      
      const handleChange=(e)=>{
        const {name,value}=e.target
      setResetUser({
        ...user,
        [name]:value
      })
      }
      
  
return (
    <div className = "resetpassword">

        <h1>Reset password</h1>
        <input type='password' name='password' value={user.password} placeholder='Enter your new password' onChange={handleChange}/>
        
        <div className="button" onClick ={resetpassword}>Submit</div>
    </div>
)
 }

 export default Resetpassword;