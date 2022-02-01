import './App.css';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Forgetpassword from './components/forgetpassword/forgetpassword';
import Resetpassword from './components/resetpassword/resetpassword';
import Individualinfo from './components/Individualinfo/individualinfo';
import Search from './components/Search/search';
import Userprofile from './components/Userprofile/userprofile';


function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/">
            {/* {
            user && user._id ?   <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/> 
            } */}
       <Homepage/>
         </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/forgetpassword">
          <Forgetpassword/>
          </Route>
          <Route path="/resetpassword">
          <Resetpassword/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/individualinfo"><Individualinfo/></Route>
          <Route path="/search">
            <Search />
            </Route>
            <Route path="/new">
            <Individualinfo name='New -' />
          </Route>
          <Route path="/update">
            <Individualinfo name='Update -' />
          </Route>
          <Route path="/delete">
            <Individualinfo name='Delete -' />
          </Route>
          <Route path="/userprofile">
            <Userprofile />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
