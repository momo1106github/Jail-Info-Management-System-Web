import Input from './Input'
import Header from './Header'
import LinkButton from './LinkButton'
import Button from './Button'
import { useHistory, useParams } from 'react-router'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Header2 from './Header2'
//import Dropdown from './Dropdown'


//Displays the Booking creation pages
const BookingCreationPage = () => {
  //The pg param is used to track what page the booking is currently in
  const {pg} = useParams();

  //Buttons are used to proceed forward and backward through the booking process
  const history = useHistory();
  const confirmInput = () =>{
    if(ValidateInput()){
      //Once input is validated calculate bail if not manually entered, and sentencing if entered
      //Sentencing might be included in separate component since it will likely be used at other points in time than during booking as well
      history.push('/bookingcreate/'+(parseInt(pg)+1))
    }
    else{
      //alert
    }
  }

  //Outdated
  const back = () =>{
    history.push('/bookingcreate/'+(parseInt(pg)-1))
  }

  //default values to be replaced, for user-defined lists
  const defaultlist = [
    {value: 'male'},
    {value: 'female'},
    {value: 'other'}
  ]
  const medinfotestlist = [
    {value: 'Diabetes'},
    {value: 'Doctor'},
    {value: 'Pregnant'}
  ]
  const gangstatuslist = [
    {value: 'active'},
    {value: 'associate'},
    {value: 'former'}
  ]

  
  //Basic Information
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [aka, setAKA] = useState("");
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [placeofbirth, setPOB] = useState("");
  const [foreignnational, setForeignNational] = useState("");
  const [ssn, setSSN] = useState("");

  //Address
  const [streetaddress, setStreetAddress] = useState("");
  const [apartmentnumber, setApartmentNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [telephonenumber, setTelephoneNumber] = useState("");

  //Temp Address
  const [streetaddresstemp, setStreetAddressTemp] = useState("");
  const [apartmentnumbertemp, setApartmentNumberTemp] = useState("");
  const [citytemp, setCityTemp] = useState("");
  const [statetemp, setStateTemp] = useState("");
  const [zipCodetemp, setZipCodeTemp] = useState("");
  const [telephonenumbertemp, setTelephoneNumberTemp] = useState("");


  //Physical Description
  const [sex, setSex] = useState("");
  const [descent, setDescent] = useState("");
  const [haircolor, setHairColor] = useState("");
  const [eyecolor, setEyeColor] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [smt, setSMT] = useState("")
  const [smtloc, setSMTLoc] = useState("")
  const [unusualsmt, setUnusualScarsMarksTattoos] = useState("");

  //Arrest Details
  const [datetimearrested, setDateTimeArrested] = useState("");
  const [arrestingagency, setArrestingAgency] = useState("");
  const [arrestlocation, setArrestLocation] = useState("");
  const [arrestcharges, setCharges] = useState("");
  const [arrestofficerid, setArrestingOfficerID] = useState("");
  const [transportofficerid, setTransportingOfficerID] = useState("");
  const [deprepnum, setDepRepNum] = useState("");

  //Vehicle Information
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
  const [parkedcity, setParkedCity] = useState("");
  const [parkedother, setParkedOther] = useState("");

  //Additional Inmate Information
  const [specialid, setSpecialId] = useState("");
  const [gangaffl, setGangAffl] = useState("");
  const [gangloc, setGangLoc] = useState("");
  const [gangstatus, setGangStatus] = useState("");

  //Emergency Contact
  const [ecfirstname, setEcFirstName] = useState("");
  const [ecmiddlename, setEcMiddleName] = useState("");
  const [eclastname, setEcLastName] = useState("");
  const [ecsuffix, setEcSuffix] = useState("");
  const [ecrelation, setEcRelation] = useState("");
  const [ecstreetaddress, setEcStreetAddress] = useState("");
  const [ecapartmentnumber, setEcApartmentNumber] = useState("");
  const [eccity, setEcCity] = useState("");
  const [ecstate, setEcState] = useState("");
  const [eczipCode, setEcZipCode] = useState("");
  const [ectelephonenumber, setEcTelephoneNumber] = useState("");

  //Employment Information
  const [occupation, setOccupation] = useState("");
  const [skills, setSkills] = useState("");
  const [highgradecomp, setHighGradeComp] = useState("");
  const [abdirection, setAbDirection] = useState("");
  const [employer, setEmployer] = useState("");
  const [biztype, setBizType] = useState("");
  const [position, setPosition] = useState("");
  const [emstreetaddress, setEmStreetAddress] = useState("");
  const [emsuitenumber, setEmSuiteNumber] = useState("");
  const [emcity, setEmCity] = useState("");
  const [emstate, setEmState] = useState("");
  const [emzipCode, setEmZipCode] = useState("");
  const [emtelephonenumber, setEmTelephoneNumber] = useState("");

  //Medical Info
  const [medinfolist, setMedInfoList] = useState([]);
  const [othermedicalinfo, setOtherMedicalInfo] = useState("");
  const [observationlist, setObservationlist] = useState([]);
  const [otherobservations, setOtherObservations] = useState("");
  //Medical Info Intermediate Values Used to add to medinfolist
  const [medicalinfo, setMedicalInfo] = useState("");
  const [doctorname, setDoctorName] = useState("");
  const [doctorphone, setDoctorPhone] = useState("");
  const [ispregnant, setIsPregnant] = useState("");
  const [observation, setObservation] = useState("");

  //req sep of inmates
  const [reqsepinmate, setReqSepInmate] = useState("");

  //comments
  const [comments, setComments] = useState("");

  //Manual Overrides
  const [bail, setBail] = useState("");
  const [sentence, setSentence] = useState("");

  //Automatically Calculate Vars
  //TODO get Automatically computed vars
  //Allow for list inputs for certain inputs like smts, smt locs, medicalinfo, obs,

  const ValidateInput = () =>{
    return true;
  }

  const addMedInfo = (medinfo, docname, docphone, ispreg) => {
    if(medinfo == "Doctor"){
      setMedInfoList(medinfolist.concat({id: medinfolist.length, desc: `${medinfo}: ${docname} Phone: ${docphone}`, value: medinfo, docname: docname, docphone:docphone}));
      console.log('doctor detected');
    }

    else{
      setMedInfoList(medinfolist.concat({id: medinfolist.length, desc: medinfo, value:medinfo}));
    }
  }

  const addObservation = (obs)=>{
    setObservationlist(observationlist.concat({id:observationlist.length, desc:obs}))
  }

  //In our output we check which page we are currently on and display that page
    return (
      <div className= "BookingPage">
      <Header title='Booking Creation'/>
      <LinkButton linklabel = 'Home' link = '/home'/>
     
      {parseInt(pg)===1 &&
      <div className = 'bookingenterpage'>

      <Header2 title = 'Basic Information'/>
      <Input inputlabel = 'First Name' onChange = {setFirstName}/>
      <Input inputlabel = 'Middle Name' onChange = {setMiddleName}/>
      <Input inputlabel = 'Last Name' onChange = {setLastName}/>
      <Input inputlabel = 'Suffix' onChange = {setSuffix}/>
      <Input inputlabel = 'AKA' onChange = {setAKA}/>
      <Input inputlabel = 'Date of Birth' onChange = {setDOB}/>
      <Input inputlabel = 'Age' onChange = {setAge}/>
      <Input inputlabel = 'Place of Birth' onChange = {setPOB}/>
      <Input inputlabel = 'Foreign National' onChange = {setForeignNational}/>
      <Input inputlabel = 'Social Security Number' onChange = {setSSN}/>

      <Header2 title = 'Permanent Address'/>
      <Input inputlabel = 'Street Address' onChange = {setStreetAddress}/>
      <Input inputlabel = 'Apartment Number' onChange = {setApartmentNumber}/>
      <Input inputlabel = 'City' onChange = {setCity}/>
      <Input inputlabel = 'State' onChange = {setState}/>
      <Input inputlabel = 'ZipCode' onChange = {setZipCode}/>
      <Input inputlabel = 'Telephone Number' onChange = {setTelephoneNumber}/>

      <Header2 title = 'Temporary Address'/>
      <Input inputlabel = 'Street Address' onChange = {setStreetAddressTemp}/>
      <Input inputlabel = 'Apartment Number' onChange = {setApartmentNumberTemp}/>
      <Input inputlabel = 'City' onChange = {setCityTemp}/>
      <Input inputlabel = 'State' onChange = {setStateTemp}/>
      <Input inputlabel = 'ZipCode' onChange = {setZipCodeTemp}/>
      <Input inputlabel = 'Telephone Number' onChange = {setTelephoneNumberTemp}/>

       
      <Header2 title = 'Inmate Physical Description'/>
      <Input inputlabel = 'Sex' onChange = {setSex}/>
      <Dropdown setvalue = {setDescent} items = {defaultlist} title = 'Descent'/>
      <Dropdown setvalue = {setHairColor} items = {defaultlist} title = 'HairColor'/>
      <Dropdown setvalue = {setEyeColor} items = {defaultlist} title = 'EyeColor'/>
      <Input inputlabel = 'Height' onChange = {setHeight}/>
      <Input inputlabel = 'Weight' onChange = {setWeight}/>
      <Dropdown setvalue = {setSMT} items = {defaultlist} title = 'Scars, Marks and Tattoos'/>
      <Dropdown setvalue = {setSMTLoc} items = {defaultlist} title = 'Scars, Marks and Tattoos Locations'/>
      <Input inputlabel = 'Unusual Scars, Marks and Tattoos' onChange = {setUnusualScarsMarksTattoos}/>

      <Header2 title = 'Arrest Details'/>
      <Input inputlabel = 'Date and Time Arrested' onChange = {setDateTimeArrested}/>
      <Input inputlabel = 'Arresting Agency' onChange = {setArrestingAgency}/>
      <Dropdown setvalue = {setArrestLocation} items = {defaultlist} title = 'Arrest Location'/>
      <Input inputlabel = 'Arrest Charge(s)' onChange = {setCharges}/>
      <Input inputlabel = 'Arresting Officer Department ID' onChange = {setArrestingOfficerID}/>
      <Input inputlabel = 'Transporting Officer Department ID' onChange = {setTransportingOfficerID}/>

      <Header2 title = 'Vehicle Information'/>
      <Input inputlabel = 'Drivers License Number' onChange = {setDriversLicenseNumber}/>
      <Input inputlabel = 'Drivers License State' onChange = {setDriversLicenseState}/>
      <Input inputlabel = 'Vehicle License Number' onChange = {setVehicleLicenseNumber}/>
      <Input inputlabel = 'Vehicle License State' onChange = {setVehicleLicenseState}/> 
      <Input inputlabel = 'Vehicle Year' onChange = {setVehicleYear}/>
      <Dropdown setvalue = {setVehicleMake} items = {defaultlist} title = 'Vehicle Make'/>
      <Dropdown setvalue = {setVehicleColor} items = {defaultlist} title = 'Vehicle Color'/>
      <Input inputlabel = 'Vehicle Disposition' onChange = {setVehicleDisposition}/>
      <Dropdown setvalue = {setImpoundCompany} items = {defaultlist} title = 'Impound Company'/>
      <Input inputlabel = 'Parked-Location' onChange = {setParkedLocation}/>
      <Input inputlabel = 'Parked-City' onChange = {setParkedCity}/>
      <Input inputlabel = 'Parked-Other' onChange = {setParkedOther}/>
      <Input inputlabel = 'Department Report Number' onChange = {setDepRepNum}/>

      <Header2 title = 'Additional Inmate Information'/>
      <Dropdown setvalue = {setSpecialId} items = {defaultlist} title = 'Special Identifiers'/>
      <Dropdown setvalue = {setGangAffl} items = {defaultlist} title = 'Gang Affiliation'/>
      <Input inputlabel = 'Gang Affiliation Unlisted' onChange = {setGangAffl}/>
      <Input inputlabel = 'Gang Location' onChange = {setGangLoc}/>
      <Dropdown setvalue = {setGangStatus} items = {gangstatuslist} title = 'Gang Membership Status'/>
      
      <Header2 title = 'Emergency Contact'/>
      <Input inputlabel = 'First Name' onChange = {setEcFirstName}/>
      <Input inputlabel = 'Middle Name' onChange = {setEcMiddleName}/>
      <Input inputlabel = 'Last Name' onChange = {setEcLastName}/>
      <Input inputlabel = 'Suffix' onChange = {setEcSuffix}/>
      <Dropdown setvalue = {setEcRelation} items = {defaultlist} title = 'Relationship to Inmate'/>
      <Input inputlabel = 'Street Address' onChange = {setEcStreetAddress}/>
      <Input inputlabel = 'Apartment Number' onChange = {setEcApartmentNumber}/>
      <Input inputlabel = 'City' onChange = {setEcCity}/>
      <Input inputlabel = 'State' onChange = {setEcState}/>
      <Input inputlabel = 'ZipCode' onChange = {setEcZipCode}/>
      <Input inputlabel = 'Telephone Number' onChange = {setEcTelephoneNumber}/>

      <Header2 title = 'Employment Information'/>
      <Input inputlabel = 'Occupation' onChange = {setOccupation}/>
      <Dropdown setvalue = {setSkills} items = {defaultlist} title = 'Skills'/>
      <Input inputlabel = 'Highest Grade Complete' onChange = {setHighGradeComp}/>
      <Dropdown setvalue = {setAbDirection} items = {defaultlist} title = 'Abiility to Understand Directions in English'/>
      <Input inputlabel = 'Employer' onChange = {setEmployer}/>
      <Input inputlabel = 'Type of Business' onChange = {setBizType}/>
      <Input inputlabel = 'Position' onChange = {setPosition}/>
      <Input inputlabel = 'Street Address' onChange = {setEmStreetAddress}/>
      <Input inputlabel = 'Suite Number' onChange = {setEmSuiteNumber}/>
      <Input inputlabel = 'City' onChange = {setEmCity}/>
      <Input inputlabel = 'State' onChange = {setEmState}/>
      <Input inputlabel = 'ZipCode' onChange = {setEmZipCode}/>
      <Input inputlabel = 'Telephone Number' onChange = {setEmTelephoneNumber}/>

      <Header2 title = 'Medical Information'/>
      <Dropdown setvalue = {setMedicalInfo} items = {medinfotestlist} title = 'Medical Information'/>
      {medicalinfo === 'Doctor' &&<div className = 'DoctorDetails'>
        <Input inputlabel = 'Name' onChange = {setDoctorName}/>
        <Input inputlabel = 'Telephone' onChange = {setDoctorPhone}/>
        </div>}
      <Button buttonlabel = 'Add Selected Medical Information' onClick ={()=>addMedInfo(medicalinfo,doctorname, doctorphone, ispregnant)}/>
      <ul>
          {medinfolist.map((medinfo) => (
            <li key={medinfo.id}>{medinfo.desc}</li>
          ))}
        </ul>
      <Input inputlabel = 'Other Medical Information' onChange = {setOtherMedicalInfo}/>

      <Dropdown setvalue = {setObservation} items = {medinfotestlist} title = 'Observations'/>
      <Button buttonlabel = 'Add Selected Observations' onClick ={()=>addObservation(observation)}/>
      <ul>
          {observationlist.map((obs) => (
            <li key={obs.id}>{obs.desc}</li>
          ))}
        </ul>
      <Input inputlabel = 'Other Observations' onChange = {setOtherObservations}/>

      <Header2 title = 'Required Separation of Inmate'/>
      <Input inputlabel = '' onChange = {setReqSepInmate}/>

      <Header2 title = 'Comments'/>
      <Input inputlabel = '' onChange = {setComments}/>

      <Header2 title = 'Manual Overrides'/>
      <Input inputlabel = 'Manual Bail' onChange = {setBail}/>
      <Input inputlabel = 'Set Sentence' onChange = {setSentence}/>
      
      </div>}

      {parseInt(pg)===2 &&
      <div className = 'BookingReceiptPage'>
           <Header2 title='Booking Receipt'/>
           <div className = 'BookingReceiptBasicInfo'>
           <label className = 'BookingReceiptTitle'>Basic Information</label>
           <pre className = 'BookingReceiptText'>{`
             First Name: ${firstname}  Middle Name: ${middlename}  Last name: ${lastname}  Suffix: ${suffix}
             Also Known As: ${aka} Date of Birth: ${dob} Age: ${age} 
             Place of Birth: ${placeofbirth} Foriegn National: ${foreignnational} Social Security Number: ${ssn}

             `}</pre>
             </div>

             <div className = 'BookingReceiptAddress'>
            <label className = 'BookingReceiptTitle'>Address</label>
            <pre className = 'BookingReceiptText'>{`
             Street Address: ${streetaddress}
             Apartment Number: ${apartmentnumber}  City: ${city} State: ${state} Zipcode: ${zipcode}
             Telephone Number: ${telephonenumber}

             `}</pre></div>

            {streetaddresstemp&&
            <div className = 'BookingReceiptTempAddress'>
            <label className = 'BookingReceiptTitle'>Temporary Address</label>
            <pre className = 'BookingReceiptText'>{`
             Street Address: ${streetaddresstemp}
             Apartment Number: ${apartmentnumbertemp}  City: ${citytemp} State: ${statetemp} Zipcode: ${zipcode}
             Telephone Number: ${telephonenumbertemp}
             `}</pre></div>}

           

      </div>
      }
    

      <LinkButton linklabel = 'Logout' link = '/'/>
      {parseInt(pg) == 1 && <div><Button buttonlabel = 'Confirm Input' onClick = {confirmInput}/></div>}
      {parseInt(pg) >= 2 && <div><Button buttonlabel = 'Back' onClick = {back}/></div>}
      </div>
    )
}
export default BookingCreationPage