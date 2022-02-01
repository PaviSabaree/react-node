import React, { useState } from 'react'
import Header from '../Header/Header';
import Individualinfo from '../Individualinfo/individualinfo';
import Navbar from '../Nav-bar/Nav-bar';
import axios from "axios"
// import { useHistory } from "react-router-dom"
import './userprofile.css';

function Userprofile() {
    const [userProfile,setUserProfile]=useState({
        name:"",
        email:"",
        notes:""
        
      })
    
    const handleChange=(e)=>{
        const {name, value}= e.target
        setUserProfile({
          ...userProfile,
          [name]:value
        })
       }
       const saveUserProfile= ()=>{
        const {name, email,notes} = userProfile
        if(userProfile && email){
          axios.post("http://localhost:8000/userProfile", userProfile)
         .then (res=>  {
          alert(res.data.message)
        //    history.push("/individualinfo")
      })
      } else {
          alert ("invalid input")
        }
        
      }
    return (
        <div className='userprofile'>
           
            <div className='userprofile-container'>
            <div className='img-holder'><img src='ProfilePic1.jpg'></img></div>
            <table>
                <tr>
                    <td><label>Full Name</label></td>
                     <td>
                         <select >
                 <option >Mr</option>
                 <option >Mrs</option>
                 <option>Ms</option>
                 </select></td><td>
                <input type ='text' name='name' value={userProfile.name} onChange={handleChange}/>
                     </td>
                    </tr>
                    <tr>
                    <td><label>Date of Birth:</label></td>  <td><select>
                                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
                                </select></td> 
                                
                                <td><select><option>January</option><option>February</option><option>March</option></select></td>
                                <td><select><option>1980</option><option>1990</option><option>2000</option></select></td>
                    </tr>
                    <tr>
                    <td><label>Nationality</label></td>  <td><select><option>country1</option><option>country2</option></select></td>
                    </tr>
                    <tr>
                    <td><label>Passport No.:</label></td>  <td> <input type ='number' name='passport'/></td>
                    <td><label>Expire Date</label></td> <td><select><option>1</option><option>2</option></select></td> <td><select><option>1</option><option>2</option></select></td> <td><select><option>1</option><option>2</option></select></td>
                        </tr>
                        <tr>
                        <td><label>Emirates ID No.:</label></td>  <td> <input type ='number' name='emirates'/></td>
                        <td><label>Expire Date</label></td>  <td><select><option>1</option><option>2</option></select></td> <td><select><option>1</option><option>2</option></select></td> <td><select><option>1</option><option>2</option></select></td>
                        </tr>
                        <tr>
                        <td><label>Mobile Number:</label></td> <td><select><option>00</option><option>91</option></select></td> <td><input type ='number' name='mobile'/></td>
                        <td>
                        <label>Landline No.:</label></td>
                        <td><select><option>00</option><option>91</option></select></td>
                        <td>
                         <input type ='number' name='landline'></input>
                        </td>
                        </tr>
                        <tr>
                        <td><label>Emirate</label></td>  <td><select><option>c1</option><option>c2</option></select></td>
                        </tr>
                        <tr>
                        <td><label>Email Address:</label></td>  <td><input type ='text' name='email' value={userProfile.email} onChange={handleChange}/></td>
                        </tr>
                        <tr>
                        <td><label>Notes:</label></td> 
                        <td><textarea></textarea></td>
                        </tr>    
                        
                    </table>
                    <li><a href='/save' onClick={saveUserProfile}>Save</a></li>
             </div>
            </div>
    )
}

export default Userprofile;
