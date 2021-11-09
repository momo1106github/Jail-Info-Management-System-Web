import axios from 'axios'
import { useState } from 'react'
import Header from '../Header'
import Navbar from '../Navbar/Navbar'


const SearchInmate = () => {
    
    return (
        
        <div className="SearchInmate">
            <Navbar/>
            <Header title="Search Inmate"/>
            
        </div>
    )
}



function write() {
    
}
export default SearchInmate

// emergencyMedicalCareNeeded, 
// alcoholInfluenced,
// drugsInfluenced,
// alcoholDrugWithdrawal,
// suicideRisk,
// mentalDisorder,
// headOrBodyLice,
// combative,
// escapeRisk,
// highProfile