import Header from '../Header'
import LinkButton from '../LinkButton'
import Button from '../Button'
import { useHistory } from 'react-router'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Header2 from '../Header2'
//import Dropdown from './Dropdown'


//Displays the Booking creation pages
const DailyBookingLog = () => {
  //Buttons are used to proceed forward and backward through the booking process
  const history = useHistory();

  //default values to be replaced, for user-defined lists
  const defaultlist = [
    {value: 'male'},
    {value: 'female'},
    {value: 'other'}
  ]

  return (
    <div className= 'Dropdown'>
       <label>{title}</label>
       <select onChange = {handleSelect}>
       <option id = 'defaultoption'>Please Select an Option</option>
       {items.map((item) => (
        <option key = {item.value} value={item.value}>{item.value}</option>
      ))}
        
       </select>
    
    </div>)
}
export default DailyBookingLog