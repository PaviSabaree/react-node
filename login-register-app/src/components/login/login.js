import React from "react";
import "./login.css"

const login = ()=> {
    return (
        <div className='login'>
            <h1>Login</h1>
            <label>Email id:&ensp;&ensp;&ensp;</label>
                <input type="text" placeholder="Enter your email id"></input><br/><br/>
                <label>Password:&ensp; </label>
                <input type="text" placeholder="Enter your password"></input><br/><br/>
                <div className="button">
                    <button>Login</button>
                </div>
                <p className="link">
            <a href="#">Forget Password</a><br/>
              New user? &ensp;
            <a href="#">Register</a>
          </p>
            </div>
    )
}

export default login;