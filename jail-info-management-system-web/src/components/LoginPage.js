import { useHistory } from 'react-router-dom'
import Input from './Input'
import {useState} from 'react'
import Header from './Header'
import Button from './Button'



const LoginPage = ({setview}) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
     //In Theory, we would verify the login information here
     //Instead we just autologin and go to the booking page
     const login = () => {
       //Checks if there is anything entered
        if(username&&password){
          history.push('/home')
          //Clears values to prevent logging out
          //And then being able to immediately log back in
          setUsername('');
          setPassword('');
          setview('myview');
        }
     }
    return (
        <div className= "Login Page">
              <Header title='Login' id='Login Header'/>
              <Input inputlabel = 'Department ID ' onChange = {setUsername}/>
              <Input inputlabel = 'Password ' onChange = {setPassword} />
              <Button buttonlabel='Login' onClick = {login} />
        </div>
    )
}
export default LoginPage