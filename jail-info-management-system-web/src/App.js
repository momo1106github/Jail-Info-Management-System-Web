import React from 'react'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import BookingCreationPage from './components/BookingCreationPage'
import IdleContainer from './components/IdleContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react'



 function App() {
 const [departmentid, setDepartmentId] = useState("");
 const [privilege, setPrivilege] = useState("");
 const logout = () =>{
   setDepartmentId("");
   setPrivilege("");
 }

 if(privilege){
   //Does a split between pages based on index setting
   return (
     <Router>
     <div className="App">
       <IdleContainer timeoutfunction = {logout}></IdleContainer>

       <div className = "Login">
         <Switch>
          
          <Route exact path ="/">
            <LoginPage setview = {setPrivilege}/>
          </Route>

          <Route exact path= "/home">
            <HomePage/>   
          </Route>

          <Route exact path ='/bookingcreate/:pg'>
            <BookingCreationPage/>
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
   );
 }
 else{
  return (
    <Router>
    <div className="App">
      <div className = "Login">
        <Switch>
         
         <Route path ="/">
           <LoginPage setview = {setPrivilege}/>
         </Route>

       </Switch>
     </div>
   </div>
   </Router>
  );
 }
 }


//class App extends React.Component {
  //render() {
    //return <h1>Hello from a class</h1>
  //}
//}

export default App;
