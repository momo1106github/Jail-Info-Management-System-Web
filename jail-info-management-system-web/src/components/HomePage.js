import Header from './Header';
import LinkButton from './LinkButton';
import Navbar from "./Navbar/Navbar";
import Button from './Button'
import Search from './Search/search';
import SearchBar from './Search/search';
import { useState } from 'react';

const HomePage = ({privilege}) => {

  return (
      <div className= "HomePage">
      {privilege === 'supervisor' && <LinkButton linklabel = 'Create New User' link = '/signup' />}
    </div>
    )
}
export default HomePage