import Header from './Header';
import LinkButton from './LinkButton';
import Navbar from "./Navbar/Navbar";
import Button from './Button'
import Search from './Search/search';
import SearchBar from './Search/search';
import { useState } from 'react';

const TransactionLog = () => {

    return (
        <div className = "Transactionlog">
            <Navbar></Navbar>
            <Header title='Trust: Transaction Log'/>
            <LinkButton linklabel = 'Home' link = '/home'/>
      </div>
      )
  }
  export default TransactionLog