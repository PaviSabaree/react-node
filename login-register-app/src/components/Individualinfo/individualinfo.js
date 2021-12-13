import React from 'react';
import Header from "../Header/Header"
import Navbar from "../Nav-bar/Nav-bar"
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
<div className='footer-bar'>
    <ul>
        <li>New</li>
        <li>Undo</li>
        <li>Update</li>
        <li>Save</li>
        <li>Documents</li>
        <li>Exit</li>
        <li>Print</li>
        <li>Delete</li>
        <li>Exit</li>
        <li>search</li>
       
    </ul>
</div>
            </div>

           
        </div>
    )
}

export default Individualinfo;
