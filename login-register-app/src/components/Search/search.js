import React from 'react'
import './search.css';

function Search() {
    return (
        <div className='search-container'>
            <div className='search'>
            <h5>Searching Option</h5>
            <table>
                <tr>
                    <td>
                    <input type ='checkbox'/>
                    </td>
                    <td>
                    <label>Full Name</label>
                    </td>
                    <td>
                    <input type ='text' name='name' />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type ='checkbox'/>
                    </td>
                    <td>
                    <label>Nationality</label>
                    </td>
                    <td>
                    <input type ='text' name='nationality' />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type ='checkbox'/>
                    </td>
                    <td>
                    <label>Passport No.:</label>
                    </td>
                    <td>
                    <input type ='number' name='passport' />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type ='checkbox'/>
                    </td>
                    <td>
                    <label>Emirates ID No.:</label>
                    </td>
                    <td>
                    <input type ='number' name='emirates'/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type ='checkbox'/>
                    </td>
                    <td>
                    <label>Mobile Number:</label>
                    </td>
                    <td>
                    <input type ='number' name='mobile'/>
                    </td>
                    <td>
                    <label>Landline No.:</label>
                    </td>
                    <td>
                    <input type ='number' name='landline'/>
                    </td>
                    </tr>
                    <tr>
                        <td>
                        <input type ='checkbox'/>
                        </td>
                        <td>
                        <label>Emirate</label>
                        </td>
                        <td>
                        <input type ='text' name='emirate'/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <input type ='checkbox'/>
                        </td>
                        <td>
                        <label>Email Address:</label>
                        </td>
                        <td>
                        <input type ='text' name='email'/>
                        </td>
                    </tr>
            
            </table>
           
     </div>
           
            <div className='search-footer-bar'>
    <ul>
        <li><a href='search'>Search</a></li>
        <li><a href='search'>Clear</a></li>
        <li><a href='/individualinfo'>Exit</a></li>
    </ul>
            </div>
 </div>
 )
}

export default Search
