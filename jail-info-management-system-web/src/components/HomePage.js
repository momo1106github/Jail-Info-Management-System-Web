import Header from './Header';
import LinkButton from './LinkButton';
import Navbar from "./Navbar/Navbar";
import Button from './Button'
import { useState } from 'react';

const HomePage = ({privilege}) => {

  return (
      <div className= "HomePage">
      {privilege === 'supervisor' && <LinkButton linklabel = 'Create New User' link = '/signup' />}
    </div>
    )
}
export default HomePage