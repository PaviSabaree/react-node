import React from 'react'
import Header from '../Header/Header';
import Individualinfo from '../Individualinfo/individualinfo';
import Navbar from '../Nav-bar/Nav-bar';
import './userprofile.css';

function Userprofile() {
    return (
        <div className='userprofile'>
           
            <div className='userprofile-container'>
            <div className='img-holder'><img src='ProfilePic1.jpg'></img></div>
            <table>
                <tr>
                    <td><label>Full Name</label></td>
                     <td>
                         <select>
                 <option>Mr</option>
                 <option>Mrs</option>
                 <option>Ms</option>
                 </select>
                <input type ='text' name='name'/>
                     </td>
                    </tr>
                    <tr>
                    <td><label>Date of Birth:</label></td>  <td><input type ='number' name='birthdate' /></td>
                    </tr>
                    <tr>
                    <td><label>Nationality</label></td>  <td><input type ='text' name='nationality'/></td>
                    </tr>
                    <tr>
                    <td><label>Passport No.:</label></td>  <td> <input type ='number' name='passport'/></td>
                    <td><label>Expire Date</label></td> <td><input type='number' name='exp-passport'/></td>
                        </tr>
                        <tr>
                        <td><label>Emirates ID No.:</label></td>  <td> <input type ='number' name='emirates'/></td>
                        <td><label>Expire Date</label></td>  <td><input type='number' name='exp-passport'/></td>
                        </tr>
                        <tr>
                        <td><label>Mobile Number:</label></td>  <td><input type ='number' name='mobile'/></td>
                        <td>
                        <label>Landline No.:</label></td>
                        <td>
                         <input type ='number' name='landline'></input>
                        </td>
                        </tr>
                        <tr>
                        <td><label>Emirate</label></td>  <td><input type ='text' name='emirate'/></td>
                        </tr>
                        <tr>
                        <td><label>Email Address:</label></td>  <td><input type ='text' name='email' /></td>
                        </tr>
                        <tr>
                        <td><label>Notes:</label></td> 
                        <td><textarea></textarea></td>
                        </tr>    
                        
                    </table>
            
            {/* 
           
            
            */}
          
            
            
            </div>
           
        </div>
    )
}

export default Userprofile;
