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
                         <select >
                 <option >Mr</option>
                 <option >Mrs</option>
                 <option>Ms</option>
                 </select></td><td>
                <input type ='text' name='name'/>
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
