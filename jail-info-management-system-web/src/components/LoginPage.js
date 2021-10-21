import { useHistory } from 'react-router-dom'
import Input from './Input'
import {useState} from 'react'
import Header from './Header'
import Button from './Button'
import axios from 'axios'



const LoginPage = ({setview, setdeptid}) => {

    const history = useHistory();
    const [departmentId, setDepartmentId] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrorMsg] = useState('');

     //In Theory, we would verify the login information here
     //Instead we just autologin and go to the booking page
     const login = () => {
       //Checks if there is anything entered
        if(departmentId&&password){
          
          axios.post("http://localhost:5000/api/user/login", {deptId: departmentId, password: password})
          .then (function (response){
          //Clears values to prevent logging out
          //And then being able to immediately log back in
          setDepartmentId('');
          setPassword('');
          setview('myview');
          setdeptid(departmentId);
            console.log(response);
          })
          .catch(function (error){
            console.log(error);
            //setErrorMsg('Invalid Username or Password');
          });
          history.push('/home');
          
        }
     }
    return (
        <div className= "Login Page">
              <Header title='Login' id='Login Header'/>
              <Input inputlabel = 'Department ID ' onChange = {setDepartmentId}/>
              <Input inputlabel = 'Password ' onChange = {setPassword} />
              <Button buttonlabel='Login' onClick = {login} />
              {errormsg && <div className = 'errormessage'>{errormsg}</div>}
        </div>
    )
}
export default LoginPage