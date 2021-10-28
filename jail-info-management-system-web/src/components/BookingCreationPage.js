import Input from './Input'
import Header from './Header'
import LinkButton from './LinkButton'
import Button from './Button'
import { useHistory, useParams } from 'react-router'
import { useState } from 'react'
import Navbar from './Navbar/Navbar'
//import Dropdown from './Dropdown'


//Displays the Booking creation pages
const BookingCreationPage = () => {
  //The pg param is used to track what page the booking is currently in
  const {pg} = useParams();

  //Buttons are used to proceed forward and backward through the booking process
  const history = useHistory();
  const proceed = () =>{
      history.push('/bookingcreate/'+(parseInt(pg)+1))
  }

  const back = () =>{
    history.push('/bookingcreate/'+(parseInt(pg)-1))
  }

  //Booking Values
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [streetaddress, setStreetAddress] = useState("");
  const [apartmentnumber, setApartmentNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [telephonenumber, setTelephoneNumber] = useState("");
  const [streetaddresstemp, setStreetAddressTemp] = useState("");
  const [apartmentnumbertemp, setApartmentNumberTemp] = useState("");
  const [citytemp, setCityTemp] = useState("");
  const [statetemp, setStateTemp] = useState("");
  const [zipCodetemp, setZipCodeTemp] = useState("");
  const [telephonenumbertemp, setTelephoneNumberTemp] = useState("");
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [placeofbirth, setPOB] = useState("");
  const [foreignnational, setForeignNational] = useState("");
  const [ssn, setSSN] = useState("");

  //pg2
  const [sex, setSex] = useState("");
  const [descent, setDescent] = useState("");
  const [haircolor, setHairColor] = useState("");
  const [eyecolor, setEyeColor] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [scarsmarkstattoos, setScarsMarksTattoos] = useState("");
  const [datetimearrested, setDateTimeArrested] = useState("");
  const [arrestingagency, setArrestingAgency] = useState("");
  const [arrestlocation, setArrestLocation] = useState("");
  const [arrestcharges, setCharges] = useState("");
  const [arrestofficerid, setArrestingOfficerID] = useState("");
  const [transportofficerid, setTransportingOfficerID] = useState("");
  const [driverslicensenumber, setDriversLicenseNumber] = useState("");
  const [driverslicensestate, setDriversLicenseState] = useState("");
  const [vehiclelicensenumber, setVehicleLicenseNumber] = useState("");
  const [vehiclelicensestate, setVehicleLicenseState] = useState("");
  const [vehicleyear, setVehicleYear] = useState("");
  const [vehiclemake, setVehicleMake] = useState("");
  const [vehiclecolor, setVehicleColor] = useState("");
  const [vehicledisposition, setVehicleDisposition] = useState("");
  const [impoundcompany, setImpoundCompany] = useState("");
  const [parkedlocation, setParkedLocation] = useState("");
  const [parkedother, setParkedOther] = useState("");


  //In our output we check which page we are currently on and display that page
    return (
      <div className= "BookingPage">
      <Navbar></Navbar>
      <Header title='Booking Creation'/>
      <LinkButton linklabel = 'Home' link = '/home'/>
      {pg === "1" && <div className = 'pg1'>
      <Input inputlabel = 'First Name' onChange = {setFirstName}/>
      <Input inputlabel = 'Middle Name' onChange = {setMiddleName}/>
      <Input inputlabel = 'Last Name' onChange = {setLastName}/>
      <Input inputlabel = 'Suffix' onChange = {setSuffix}/>
      <Header title = 'Permanent Address'/>
      <Input inputlabel = 'Street Address' onChange = {setStreetAddress}/>
      <Input inputlabel = 'Apartment Number' onChange = {setApartmentNumber}/>
      <Input inputlabel = 'City' onChange = {setCity}/>
      <Input inputlabel = 'State' onChange = {setState}/>
      <Input inputlabel = 'ZipCode' onChange = {setZipCode}/>
      <Input inputlabel = 'Telephone Number' onChange = {setTelephoneNumber}/>
      <Header title = 'Temporary Address'/>
      <Input inputlabel = 'Street Address' onChange = {setStreetAddressTemp}/>
      <Input inputlabel = 'Apartment Number' onChange = {setApartmentNumberTemp}/>
      <Input inputlabel = 'City' onChange = {setCityTemp}/>
      <Input inputlabel = 'State' onChange = {setStateTemp}/>
      <Input inputlabel = 'ZipCode' onChange = {setZipCodeTemp}/>
      <Input inputlabel = 'Telephone Number' onChange = {setTelephoneNumberTemp}/>
      <Input inputlabel = 'Date of Birth' onChange = {setDOB}/>
      <Input inputlabel = 'Age' onChange = {setAge}/>
      <Input inputlabel = 'Place of Birth' onChange = {setPOB}/>
      <Input inputlabel = 'Foreign National' onChange = {setForeignNational}/>
      <Input inputlabel = 'Social Security Number' onChange = {setSSN}/>
       </div>}

      {pg === "2" && <div className = 'pg2'>
      <Input inputlabel = 'Sex' onChange = {setSex}/>
      <Input inputlabel = 'Descent' onChange = {setDescent}/>
      <Input inputlabel = 'Hair Color' onChange = {setHairColor}/>
      <Input inputlabel = 'Eye Color' onChange = {setEyeColor}/>
      <Input inputlabel = 'Height' onChange = {setHeight}/>
      <Input inputlabel = 'Weight' onChange = {setWeight}/>
      <Input inputlabel = 'Scars, Marks and Tattoos' onChange = {setScarsMarksTattoos}/>
      <Input inputlabel = 'Date and Time Arrested' onChange = {setDateTimeArrested}/>
      <Input inputlabel = 'Arresting Agency' onChange = {setArrestingAgency}/>
      <Input inputlabel = 'Arrest Location' onChange = {setArrestLocation}/>
      <Input inputlabel = 'Arrest Charge(s)' onChange = {setCharges}/>
      <Input inputlabel = 'Arresting Officer Department ID' onChange = {setArrestingOfficerID}/>
      <Input inputlabel = 'Transporting Officer Department ID' onChange = {setTransportingOfficerID}/>
      <Input inputlabel = 'Drivers License Number' onChange = {setDriversLicenseNumber}/>
      <Input inputlabel = 'Drivers License State' onChange = {setDriversLicenseState}/>
      <Input inputlabel = 'Vehicle License Number' onChange = {setVehicleLicenseNumber}/>
      <Input inputlabel = 'Vehicle License State' onChange = {setVehicleLicenseState}/>
      <Input inputlabel = 'Vehicle Year' onChange = {setVehicleYear}/>
      <Input inputlabel = 'Vehicle Make' onChange = {setVehicleMake}/>
      <Input inputlabel = 'Vehicle Color' onChange = {setVehicleColor}/>
      <Input inputlabel = 'Vehicle Disposition' onChange = {setVehicleDisposition}/>
      <Input inputlabel = 'Impound Company' onChange = {setImpoundCompany}/>
      <Input inputlabel = 'Parked Location' onChange = {setParkedLocation}/>
      <Input inputlabel = 'Parked-Other' onChange = {setParkedOther}/>
      </div>}

      {pg === "3" && <div className = 'pg3'>
        
        </div>}

      <LinkButton linklabel = 'Logout' link = '/'/>
      {parseInt(pg) <= 5 && <div><Button buttonlabel = 'Proceed' onClick = {proceed}/></div>}
      {parseInt(pg) >= 2 && <div><Button buttonlabel = 'Back' onClick = {back}/></div>}
      </div>
    )
}
export default BookingCreationPage