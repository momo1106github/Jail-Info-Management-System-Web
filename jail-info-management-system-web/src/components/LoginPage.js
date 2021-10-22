import { useHistory } from 'react-router-dom'
import Input from './Input'
import {useState} from 'react'
import Header from './Header'
import Button from './Button'
import axios from 'axios'



const LoginPage = ({setview, setdeptid}) => {

    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrorMsg] = useState('');

     //In Theory, we would verify the login information here
     //Instead we just autologin and go to the booking page
     const login = () => {
       //Checks if there is anything entered
        if(username&&password){
          
          axios.post("http://localhost:5000/api/user/login", {deptId: username, password: password})
          .then (function (response){
          //Clears values to prevent logging out
          //And then being able to immediately log back in
          setview(response.data.role);
          setdeptid(username);
          setUsername('');
          setPassword('');
          console.log(response);
          history.push('/home');
          })
          .catch(function (error){
            //console.log(error);
            setErrorMsg('Invalid Username or Password');
          });
          
          
        }
     }
    return (
        <div className= "Login Page">
              <Header title='Login' id='Login Header'/>
              <Input inputlabel = 'Department ID ' onChange = {setUsername}/>
              <Input inputlabel = 'Password ' onChange = {setPassword} />
              <Button buttonlabel='Login' onClick = {login} />
              <div className = 'errormessage'>{errormsg}</div>
        </div>
    )
}
export default LoginPage