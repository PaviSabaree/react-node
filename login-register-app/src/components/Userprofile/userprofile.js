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
             <label>Full Name</label>&nbsp;
            <input type ='text' name='name'></input><br/>
            <label>Date of Birth:</label>&nbsp;
            <input type ='number' name='birthdate'></input><br/>
            <label>Nationality</label>&nbsp;
            <input type ='text' name='nationality'></input><br/>
            <label>Passport No.:</label>&nbsp;
            <input type ='number' name='passport'></input>
            <label>Expire Date</label>&nbsp;
            <input type='number' name='exp-passport'></input><br/>
            <label>Emirates ID No.:</label>&nbsp;
            <input type ='number' name='emirates'></input>
            <label>Expire Date</label>&nbsp;
            <input type='number' name='exp-passport'></input><br/>
            <label>Mobile Number:</label>&nbsp;
            <input type ='number' name='mobile'></input>
            <label>Landline No.:</label>&nbsp;
            <input type ='number' name='landline'></input><br/>
            <label>Emirate</label>&nbsp;
            <input type ='text' name='emirate'></input><br/>
            <label>Email Address:</label>&nbsp;
            <input type ='text' name='email'></input><br/>
            <label>Notes:</label>
            <textarea></textarea>
            </div>
           
        </div>
    )
}

export default Userprofile;
