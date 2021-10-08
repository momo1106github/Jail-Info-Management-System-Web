import React from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import {useState} from 'react'


 function App() {
  const [index, setIndex] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

   //Switches Page
   const switchPage = (pagenumber)=>{
    setIndex(pagenumber);
   }

   //In Theory, we would verify the login information here
   //Instead we just autologin and go to the booking page
   const login = () => {
     //Checks if there is anything entered
      if(username&&password){
        switchPage(1);
        setUsername('');
        setPassword('');
      }
   }

   //Does a split between pages based on index setting
   return (
     <div className="App">
       {index === 0 ? 
       <div className= "Login Page">
       <Header title='Login'/>
       <Input inputlabel = 'Department ID ' onChange = {setUsername}/>
       <Input inputlabel = 'Password ' onChange = {setPassword} onLoadStart = {setPassword}/>
       <Button buttonlabel='Login' onClick = {login} />
       </div>
        :''} 

        {index === 1 ? 
       <div className= "Home Page">
       <Button buttonlabel = 'Home' onClick = {() =>switchPage(1)}/>
       <Header title='Home'/>
       <Header title = "Pages"/>
       <Button buttonlabel = 'Booking' onClick = {() =>switchPage(2)}/>
       <Button buttonlabel = 'Logout' onClick = {() =>switchPage(0)}/>
       </div>
        :''}

       {index === 2 ? 
       <div className= "Booking Page">
       <Button buttonlabel = 'Home' onClick = {() =>switchPage(1)}/>
       <Header title='Booking Creation'/>
       <Input inputlabel = 'First Name '/>
       <Input inputlabel = 'Last Name '/>
       <Button buttonlabel = 'Logout' onClick = {() =>switchPage(0)}/>
       </div>
        :''}  
    </div>
   );
 }


//class App extends React.Component {
  //render() {
    //return <h1>Hello from a class</h1>
  //}
//}

export default App;
