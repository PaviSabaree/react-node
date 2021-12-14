import React from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom"
import Header from "../Header/Header"
import Navbar from "../Nav-bar/Nav-bar"
 
const Homepage = ({ setLoginUser}) => {

   
    const history = useHistory()

   
        var dt=new Date();
        var showdate=dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear();
        var showtime=dt.toLocaleTimeString();
    
  
return (
    <div className = "homepage">

        <Header/>
        <Navbar/>
        <div className='container'>
        
        <div className='mainscreen-container'>
        
        <div className='clearfix'>
            <div className='flex-div'>
            <img src='time.png'></img>
            <div className='date-time'>
            <h4>Date and Time</h4>
            <div className="box-info">
            <h4>Date:{showdate}</h4>
            <h4>Time:{showtime}</h4>
            </div>
            </div>
            </div>
            </div>

<div className="clearfix">
<div className='flex-div'>
<img src='contract.png'></img>
            <div className='buying-selling'>
            <h4>Buying/Selling Contracts</h4>
            <div className="box-info">
            <h4>New:05</h4>
            <h4>Expired:11</h4>
            </div>
            </div>
                </div>

</div>
           
           <div className="clearfix">
           
                <div className='flex-div'>
                <img src='meeting.png'></img>
                <div className='up-coming-meeting'>
           <h4>Up-Coming meeting</h4>
           <div className="box-info">
            <h4>This week:03/12</h4>
            <h4>Next week:08</h4>
            <h4>Next month:06</h4>
            </div>
            </div>
            </div>
            </div>

<div className="clearfix">
<div className='flex-div'>
<img src='lease.png'></img>
                <div className='leasing-service'>
             <h4>Leasing service</h4>
             <div className="box-info">
            <h4>Villa & Apartment: 05/12</h4>
            <h4>Warehouse & Shops:07/14</h4>
            <h4>Land:11</h4>
            </div>
                </div>
                </div>
</div>
               
<div className='clearfix'>
<div className='flex-div'>
<img src='maintain.png'></img>
                <div className='maintenance-service'>
            <h4>Maintenance service</h4>
            <div className="box-info">
            <h4>New:05</h4>
            <h4>Open:09</h4>
            <h4>Complete:11/25</h4>
                </div>
                </div>
                </div>
</div>
                
<div className='clearfix'>

<div className='flex-div'>
<img src='revenue.png'></img>
                <div className='revenue-states'>
            <h4>Revenue states</h4>
            <div className="box-info">
            <h4>Rent Collection:45/305</h4>
            <h4>Sales Brokerage:03/13</h4>
            <h4>Building Management:02/05</h4>
</div>
</div>
                </div>
</div>
           
           

            
           

    
                </div>
               
        {/* <div className="button" onClick = {()=>history.push("/login")}>Logout</div> */}
        </div>
    </div>
)
 }

 export default Homepage;