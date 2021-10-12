import React from 'react'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import BookingCreationPage from './components/BookingCreationPage'
//import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



 function App() {
 

   //Does a split between pages based on index setting
   return (
     <Router>
     <div className="App">
       <div className = "Login">
         <Switch>
          
          <Route exact path ="/">
            <LoginPage/>
          </Route>

          <Route exact path= "/home">
            <HomePage/>   
          </Route>

          <Route exact path ='/bookingcreate'>
            <BookingCreationPage/>
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
