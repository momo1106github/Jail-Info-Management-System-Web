import React from 'react'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import BookingCreationPage from './components/Booking/BookingCreationPage'
import DailyBookingLog from './components/Booking/DailyBookingLog'
import IdleContainer from './components/IdleContainer'
import Redirect from './components/Redirect'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'
import NewTransaction from './components/Transactions/NewTransaction'
import SearchInmate from './components/Search/SearchInmate'
import Navbar from './components/Navbar/Navbar'
import SafeTransaction from './components/Transactions/SafeTransactions'
import TransactionLog from './components/Transactions/TransactionLog'

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
       <Navbar/>
       

       <div className = "Page Container">
         <Switch>
  
          <Route exact path ="/">
            <LoginPage setview = {setPrivilege} setdeptid = {setDepartmentId}/>
          </Route>

          <Route exact path= "/home">
            <HomePage privilege = {privilege}/>   
          </Route>

          <Route exact path ='/signup'>
            <SignupPage permission = {privilege === 'supervisor'? true : false}/>
          </Route> 

          <Route exact path ='/bookingcreate/:pg'>
            <BookingCreationPage bookingclerkid = {departmentid}/>
          </Route>

          <Route exact path ='/dailybookinglog'>
            <DailyBookingLog/>
          </Route>

           <Route exact path ='/newtransaction/:pg'>
            <NewTransaction/>
          </Route> 

<<<<<<< HEAD
          <Route exact path ='/searchInmate'>
            <SearchInmate/>
          </Route>
=======
          <Route exact path ='/safetransaction'>
            <SafeTransaction/>
          </Route>

          <Route exact path ='/transactionlog'>
            <TransactionLog/>
          </Route>  

>>>>>>> 9d46dc76617aa91557d80557fcd6cfff448a7194
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
