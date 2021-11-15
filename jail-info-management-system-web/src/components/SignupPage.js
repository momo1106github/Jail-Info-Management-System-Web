import { useHistory } from 'react-router-dom'
import {useState} from 'react'
import Header from './Header'
import Dropdown from './Booking/Dropdown'
import PreInput from './PrefilledInput'
import Button from './Button'
import axios from 'axios'

const SignupPage = ({permission}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errormsg, setErrorMsg] = useState('');
    
    const roles = [
      {value: 'Clerk'},
      {value: 'Supervisor'}
    ]

     //Signs a new user up
     const signupnewuser = () => {
       //Checks if that user has input all fields
        if(username&&password&&role&&role!='Please Select an Option'&&permission){
         // console.log(username, password, role.toLocaleLowerCase());

         //Sends an Axios Request to signup a new user
          axios.post("http://localhost:5000/api/user/signup", {deptID: username, password: password, role: role.toLocaleLowerCase()})
          .then (function (response){
          setUsername('');
          setPassword('');
          setRole('');
          setErrorMsg('');
          console.log(response);
          })
          .catch(function (error){
            //console.log(error);
            setErrorMsg('Error Creating New User!');
          });
          
          
        }
        else{
          setErrorMsg('A new user must have a Department ID, a Password, and a Role!')
        }
     }
    return (
        <div className= "SignupPage">
              <Header title='Signup' id='Login Header'/>
              <PreInput defaultvalue = {username}  inputlabel = 'New User Department ID ' onChange = {setUsername}/>
              <PreInput defaultvalue = {password} inputlabel = 'New User Password ' onChange = {setPassword} inputtype ='password' />
              <Dropdown title = 'Select New User Role ' items = {roles} setvalue = {setRole}/>
              <Button buttonlabel='Sign up New User' onClick = {signupnewuser} />
              <div className = 'errormessage'>{errormsg}</div>
        </div>
    )
}
export default SignupPage