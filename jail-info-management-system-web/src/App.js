import React from 'react'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import BookingCreationPage from './components/Booking/BookingCreationPage'
import IdleContainer from './components/IdleContainer'
import Redirect from './components/Redirect'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'



 function App() {
 const [departmentid, setDepartmentId] = useState("");
 const [privilege, setPrivilege] = useState("");
 const logout = () =>{
   setDepartmentId("");
   setPrivilege("");
 }


   //Does a split between pages based on index setting
   return (
     <Router>
     <div className="App">
       <IdleContainer timeoutfunction = {logout}></IdleContainer>
       <Redirect departmentid = {departmentid} role = {privilege} desturl = {"/"}/>
       

       <div className = "Page Container">
         <Switch>
  
          <Route exact path ="/">
            <LoginPage setview = {setPrivilege} setdeptid = {setDepartmentId}/>
          </Route>

          <Route exact path= "/home">
            <HomePage/>   
          </Route>

          <Route exact path ='/bookingcreate/:pg'>
            <BookingCreationPage bookingclerkid = {departmentid}/>
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
   );
 
 }


//class App extends React.Component {
  //render() {
    //return <h1>Hello from a class</h1>
  //}
//}

export default App;
