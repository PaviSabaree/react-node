import React, { useState }from "react";
import "./forgetpassword.css";
import { useHistory } from "react-router-dom"
import axios from "axios"

const Forgetpassword = () => {

    const history = useHistory()
    
    const forgetpassword=()=>{
        const {password}=user
        axios.post("http://localhost:8000/forgetpassword", user)
        .then (res=>  {
           alert(res.data.message)
        //    setForgetUser(res.data.user)
         history.push("/login");
      
      })
    }
    const [user,setForgetUser]=useState({
        email:"",
        password:""
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
        <input type='password' name='password' value={user.password} placeholder='Enter your new password' onChange={handleChange}/>
        
        <div className="button" onClick ={forgetpassword}>Submit</div>
    </div>
)
 }

 export default Forgetpassword;