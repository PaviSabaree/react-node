import React from 'react'
import './search.css';

function Search() {
    return (
        <div className='search-container'>
            <div className='search'>
            <h5>Searching Option</h5>
            <label>Full Name</label>&nbsp;
            <input type ='text' name='name'></input><br/>
            <label>Nationality</label>&nbsp;
            <input type ='text' name='nationality'></input><br/>
            <label>Passport No.:</label>&nbsp;
            <input type ='number' name='passport'></input><br/>
            <label>Emirates ID No.:</label>&nbsp;
            <input type ='number' name='emirates'></input><br/>
            <label>Mobile Number:</label>&nbsp;
            <input type ='number' name='mobile'></input>
            <label>Landline No.:</label>&nbsp;
            <input type ='number' name='landline'></input><br/>
            <label>Emirate</label>&nbsp;
            <input type ='text' name='emirate'></input><br/>
            <label>Email Address:</label>&nbsp;
            <input type ='text' name='email'></input><br/>
            </div>
           
            <div className='search-footer-bar'>
    <ul>
        <li><a href='search'>Search</a></li>
        <li><a href='clear'>Clear</a></li>
        <li><a href='exit'>Exit</a></li>
        </ul>
        </div>
        </div>
    )
}

export default Search
