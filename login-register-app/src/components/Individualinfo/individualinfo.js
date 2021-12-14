import React from 'react';
import Header from "../Header/Header"
import Navbar from "../Nav-bar/Nav-bar"
import Userprofile from '../Userprofile/userprofile';
import "./individualinfo.css"

function Individualinfo() {
    
    return (
        <div className='ind-info'>
            <Header/>
            <Navbar/>
            <div className='container-info'>
                <div className='top-bar'>
                <h7>{} Individual Client Information</h7>
                </div>
                <Userprofile/>
<div className='footer-bar'>
    <ul>
        <li><a href='new'>New</a></li>
        <li><a href='undo'>Undo</a></li>
        <li><a href='update'>Update</a></li>
        <li><a href='save'>Save</a></li>
        <li><a href='documents'>Documents</a></li>
        <li><a href='exit'>Exit</a></li>
        <li><a href='print'>Print</a></li>
        <li><a href='delete'>Delete</a></li>
        <li><a href='exit'>Exit</a></li>
        <li><a href='search'>Search</a></li>
       
    </ul>
</div>
            </div>

           
        </div>
    )
}

export default Individualinfo;
