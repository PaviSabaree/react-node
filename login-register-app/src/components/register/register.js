import React from "react";
import "./register.css"

const register = () => {
    return(
        <div className='register'>
        <h1>Register</h1>
        <label>Username:&ensp;&ensp;&ensp;</label>
        <input type="text" placeholder="Enter your name"></input><br/><br/>
        <label>Email id:&ensp;&ensp;&ensp;&ensp;&ensp;</label>
        <input type="text" placeholder="Enter your email id"></input><br/><br/>
        <label>Password:&ensp;&ensp;&ensp; </label>
        <input type="text" placeholder="Enter your password"></input><br/><br/>
        <label>Ph.no:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </label>
        <input type="number" placeholder="Enter your phone number"></input><br/><br/>
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

export default register;