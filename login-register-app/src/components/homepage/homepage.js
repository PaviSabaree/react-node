import React, { useState } from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom"

 
const Homepage = ({setLoginUser}) => {

   
    const history = useHistory()
return (
    <div className = "homepage">

        <h1>Hello </h1>
        <h2>Email id: </h2>
        <h2>Phone no: </h2>
        <div className="button" onClick = {()=>history.push("/login")}>
            <button>Logout</button>
 </div>
    </div>
)
 }

 export default Homepage;