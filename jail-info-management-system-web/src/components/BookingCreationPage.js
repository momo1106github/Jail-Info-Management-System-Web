import Input from './Input'
import Header from './Header'
import LinkButton from './LinkButton'
import Button from './Button'
import { useHistory, useParams } from 'react-router'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Header2 from './Header2'
import PreInput from './PrefilledInput'
import BookingListItem from './BookingListItem'
//import Dropdown from './Dropdown'


//Displays the Booking creation pages
const BookingCreationPage = ({bookingclerkid}) => {
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

  const defsmtlist = [
    {value: 'Butterfly'},
    {value: 'Cross'},
    {value: 'Birthmark'}
  ]
  const smtloclist = [
    {value: 'Leg'},
    {value: 'Face'},
    {value: 'Back'}
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
  const [zipcodetemp, setZipCodeTemp] = useState("");
  const [telephonenumbertemp, setTelephoneNumberTemp] = useState("");


  //Physical Description
  const [sex, setSex] = useState("");
  const [descent, setDescent] = useState("");
  const [haircolor, setHairColor] = useState("");
  const [eyecolor, setEyeColor] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [smtlist, setSMTList] = useState([])
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
  const [searchingofficerid, setSearchingOfficerID] = useState("")
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
  const [eczipcode, setEcZipCode] = useState("");
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
  const [idgen, setIdGen] = useState(0);

  //Automatically Calculate Vars
  //TODO get Automatically computed vars
  //Allow for list inputs for certain inputs like smts, smt locs, medicalinfo, obs,

  const ValidateInput = () =>{
    return true;
  }

  const addMedInfo = (medinfo, docname, docphone, ispreg) => {
    if(medinfo===''||medinfo=='Please Select an Option'){
      return;
    }
    if(medinfo == "Doctor"){
      setMedInfoList(medinfolist.concat({id: idgen, desc: `${medinfo}: ${docname} Phone: ${docphone}`, value: medinfo, docname: docname, docphone:docphone}));
    }

    else{
      setMedInfoList(medinfolist.concat({id: idgen, desc: medinfo, value:medinfo}));
    }

    setIdGen(idgen+1);
  }

  const addSMT = (mysmt, mysmtloc) => {
    if(mysmt===''||mysmt=='Please Select an Option'){
      return;
    }
    if(mysmtloc===''||mysmtloc=='Please Select an Option'){
      return;
    }
      setSMTList(smtlist.concat({id: idgen, desc: `${mysmt} : ${mysmtloc}`, value:{mysmt}, loc:{mysmtloc}}));
    
    setIdGen(idgen+1);
  }

  const addListItem = (item,list,setfunc)=>{
    if(item===''||item=='Please Select an Option'){
      return;
    }
    setfunc(list.concat({id:idgen, desc:item}));
    setIdGen(idgen+1);
  }

  const removeListItem = (id, list, setfunc)=>{
    setfunc(list.filter((obj)=>obj.id!==id))
  }

  //In our output we check which page we are currently on and display that page
    return (
      <div className= "BookingPage">
      <Header title='Booking Creation'/>
      <LinkButton linklabel = 'Home' link = '/home'/>
     
      {parseInt(pg)===1 &&
      <div className = 'bookingenterpage'>

      <Header2 title = 'Basic Information'/>
      <PreInput defaultvalue = {firstname} inputlabel = 'First Name' onChange = {setFirstName}/>
      <PreInput defaultvalue = {middlename} inputlabel = 'Middle Name' onChange = {setMiddleName}/>
      <PreInput defaultvalue = {lastname} inputlabel = 'Last Name' onChange = {setLastName}/>
      <PreInput defaultvalue = {suffix} inputlabel = 'Suffix' onChange = {setSuffix}/>
      <PreInput defaultvalue = {aka} inputlabel = 'AKA' onChange = {setAKA}/>
      <PreInput defaultvalue = {dob} inputlabel = 'Date of Birth' onChange = {setDOB}/>
      <PreInput defaultvalue = {age} inputlabel = 'Age' onChange = {setAge}/>
      <PreInput defaultvalue = {placeofbirth} inputlabel = 'Place of Birth' onChange = {setPOB}/>
      <PreInput defaultvalue = {foreignnational} inputlabel = 'Foreign National' onChange = {setForeignNational}/>
      <PreInput defaultvalue = {ssn} inputlabel = 'Social Security Number' onChange = {setSSN}/>

      <Header2 title = 'Permanent Address'/>
      <PreInput defaultvalue = {streetaddress} inputlabel = 'Street Address' onChange = {setStreetAddress}/>
      <PreInput defaultvalue = {apartmentnumber} inputlabel = 'Apartment Number' onChange = {setApartmentNumber}/>
      <PreInput defaultvalue = {city} inputlabel = 'City' onChange = {setCity}/>
      <PreInput defaultvalue = {state} inputlabel = 'State' onChange = {setState}/>
      <PreInput defaultvalue = {zipcode} inputlabel = 'ZipCode' onChange = {setZipCode}/>
      <PreInput defaultvalue = {telephonenumber} inputlabel = 'Telephone Number' onChange = {setTelephoneNumber}/>

      <Header2 title = 'Temporary Address'/>
      <PreInput defaultvalue = {streetaddresstemp} inputlabel = 'Street Address' onChange = {setStreetAddressTemp}/>
      <PreInput defaultvalue = {apartmentnumbertemp} inputlabel = 'Apartment Number' onChange = {setApartmentNumberTemp}/>
      <PreInput defaultvalue = {citytemp} inputlabel = 'City' onChange = {setCityTemp}/>
      <PreInput defaultvalue = {statetemp} inputlabel = 'State' onChange = {setStateTemp}/>
      <PreInput defaultvalue = {zipcodetemp} inputlabel = 'ZipCode' onChange = {setZipCodeTemp}/>
      <PreInput defaultvalue = {telephonenumbertemp} inputlabel = 'Telephone Number' onChange = {setTelephoneNumberTemp}/>

       
      <Header2 title = 'Inmate Physical Description'/>
      <PreInput defaultvalue = {sex} inputlabel = 'Sex' onChange = {setSex}/>
      <Dropdown setvalue = {setDescent} items = {defaultlist} title = 'Descent'/>
      <Dropdown setvalue = {setHairColor} items = {defaultlist} title = 'HairColor'/>
      <Dropdown setvalue = {setEyeColor} items = {defaultlist} title = 'EyeColor'/>
      <PreInput defaultvalue = {height} inputlabel = 'Height' onChange = {setHeight}/>
      <PreInput defaultvalue = {weight} inputlabel = 'Weight' onChange = {setWeight}/>
      <Dropdown setvalue = {setSMT} items = {defsmtlist} title = 'Scars, Marks and Tattoos'/>
      <Dropdown setvalue = {setSMTLoc} items = {smtloclist} title = 'Scars, Marks and Tattoos Locations'/>
      <Button buttonlabel = 'Add Scar Mark or Tatto' onClick ={()=>addSMT(smt,smtloc)}/>
     
          {smtlist.map((mysmt) => (
            <BookingListItem key= {mysmt.id} label={mysmt.desc} onClick={()=>removeListItem(mysmt.id ,smtlist, setSMTList)}/> 
          ))}
      <PreInput defaultvalue = {unusualsmt} inputlabel = 'Unusual Scars, Marks and Tattoos' onChange = {setUnusualScarsMarksTattoos}/>

      <Header2 title = 'Arrest Details'/>
      <PreInput defaultvalue = {datetimearrested} inputlabel = 'Date and Time Arrested' onChange = {setDateTimeArrested}/>
      <PreInput defaultvalue = {arrestingagency} inputlabel = 'Arresting Agency' onChange = {setArrestingAgency}/>
      <Dropdown setvalue = {setArrestLocation} items = {defaultlist} title = 'Arrest Location'/>
      <PreInput defaultvalue = {arrestcharges} inputlabel = 'Arrest Charge(s)' onChange = {setCharges}/>
      <PreInput defaultvalue = {arrestofficerid} inputlabel = 'Arresting Officer Department ID' onChange = {setArrestingOfficerID}/>
      <PreInput defaultvalue = {transportofficerid} inputlabel = 'Transporting Officer Department ID' onChange = {setTransportingOfficerID}/>
      <PreInput defaultvalue = {searchingofficerid} inputlabel = 'Searching Officer Department ID' onChange = {setSearchingOfficerID}/>

      <Header2 title = 'Vehicle Information'/>
      <PreInput defaultvalue = {driverslicensenumber} inputlabel = 'Drivers License Number' onChange = {setDriversLicenseNumber}/>
      <PreInput defaultvalue = {driverslicensestate} inputlabel = 'Drivers License State' onChange = {setDriversLicenseState}/>
      <PreInput defaultvalue = {vehiclelicensenumber} inputlabel = 'Vehicle License Number' onChange = {setVehicleLicenseNumber}/>
      <PreInput defaultvalue = {vehiclelicensestate} inputlabel = 'Vehicle License State' onChange = {setVehicleLicenseState}/> 
      <PreInput defaultvalue = {vehicleyear} inputlabel = 'Vehicle Year' onChange = {setVehicleYear}/>
      <Dropdown setvalue = {setVehicleMake} items = {defaultlist} title = 'Vehicle Make'/>
      <Dropdown setvalue = {setVehicleColor} items = {defaultlist} title = 'Vehicle Color'/>
      <PreInput defaultvalue = {vehicledisposition} inputlabel = 'Vehicle Disposition' onChange = {setVehicleDisposition}/>
      <Dropdown setvalue = {setImpoundCompany} items = {defaultlist} title = 'Impound Company'/>
      <PreInput defaultvalue = {parkedlocation} inputlabel = 'Parked-Location' onChange = {setParkedLocation}/>
      <PreInput defaultvalue = {parkedcity} inputlabel = 'Parked-City' onChange = {setParkedCity}/>
      <PreInput defaultvalue = {parkedother} inputlabel = 'Parked-Other' onChange = {setParkedOther}/>
      <PreInput defaultvalue = {deprepnum} inputlabel = 'Department Report Number' onChange = {setDepRepNum}/>

      <Header2 title = 'Additional Inmate Information'/>
      <Dropdown setvalue = {setSpecialId} items = {defaultlist} title = 'Special Identifiers'/>
      <Dropdown setvalue = {setGangAffl} items = {defaultlist} title = 'Gang Affiliation'/>
      <PreInput defaultvalue = {gangaffl} inputlabel = 'Gang Affiliation Unlisted' onChange = {setGangAffl}/>
      <PreInput defaultvalue = {gangloc} inputlabel = 'Gang Location' onChange = {setGangLoc}/>
      <Dropdown setvalue = {setGangStatus} items = {gangstatuslist} title = 'Gang Membership Status'/>
      
      <Header2 title = 'Emergency Contact'/>
      <PreInput defaultvalue = {ecfirstname} inputlabel = 'First Name' onChange = {setEcFirstName}/>
      <PreInput defaultvalue = {ecmiddlename} inputlabel = 'Middle Name' onChange = {setEcMiddleName}/>
      <PreInput defaultvalue = {eclastname} inputlabel = 'Last Name' onChange = {setEcLastName}/>
      <PreInput defaultvalue = {suffix} inputlabel = 'Suffix' onChange = {setEcSuffix}/>
      <Dropdown setvalue = {setEcRelation} items = {defaultlist} title = 'Relationship to Inmate'/>
      <PreInput defaultvalue = {ecstreetaddress} inputlabel = 'Street Address' onChange = {setEcStreetAddress}/>
      <PreInput defaultvalue = {ecapartmentnumber} inputlabel = 'Apartment Number' onChange = {setEcApartmentNumber}/>
      <PreInput defaultvalue = {eccity} inputlabel = 'City' onChange = {setEcCity}/>
      <PreInput defaultvalue = {ecstate} inputlabel = 'State' onChange = {setEcState}/>
      <PreInput defaultvalue = {eczipcode} inputlabel = 'ZipCode' onChange = {setEcZipCode}/>
      <PreInput defaultvalue = {ectelephonenumber} inputlabel = 'Telephone Number' onChange = {setEcTelephoneNumber}/>

      <Header2 title = 'Employment Information'/>
      <PreInput defaultvalue = {occupation} inputlabel = 'Occupation' onChange = {setOccupation}/>
      <Dropdown setvalue = {setSkills} items = {defaultlist} title = 'Skills'/>
      <PreInput defaultvalue = {highgradecomp} inputlabel = 'Highest Grade Complete' onChange = {setHighGradeComp}/>
      <Dropdown setvalue = {setAbDirection} items = {defaultlist} title = 'Abiility to Understand Directions in English'/>
      <PreInput defaultvalue = {employer} inputlabel = 'Employer' onChange = {setEmployer}/>
      <PreInput defaultvalue = {biztype} inputlabel = 'Type of Business' onChange = {setBizType}/>
      <PreInput defaultvalue = {position} inputlabel = 'Position' onChange = {setPosition}/>
      <PreInput defaultvalue = {emstreetaddress} inputlabel = 'Street Address' onChange = {setEmStreetAddress}/>
      <PreInput defaultvalue = {emsuitenumber} inputlabel = 'Suite Number' onChange = {setEmSuiteNumber}/>
      <PreInput defaultvalue = {emcity} inputlabel = 'City' onChange = {setEmCity}/>
      <PreInput defaultvalue = {emstate} inputlabel = 'State' onChange = {setEmState}/>
      <PreInput defaultvalue = {emzipCode} inputlabel = 'ZipCode' onChange = {setEmZipCode}/>
      <PreInput defaultvalue = {emtelephonenumber} inputlabel = 'Telephone Number' onChange = {setEmTelephoneNumber}/>

      <Header2 title = 'Medical Information'/>
      <Dropdown setvalue = {setMedicalInfo} items = {medinfotestlist} title = 'Medical Information'/>
      {medicalinfo === 'Doctor' &&<div className = 'DoctorDetails'>
        <Input inputlabel = 'Name' onChange = {setDoctorName}/>
        <Input inputlabel = 'Telephone' onChange = {setDoctorPhone}/>
        </div>}
      <Button buttonlabel = 'Add Selected Medical Information' onClick ={()=>addMedInfo(medicalinfo,doctorname, doctorphone, ispregnant)}/>
      
          {medinfolist.map((medinfo) => (
            <BookingListItem key={medinfo.id} label = {medinfo.desc} onClick = {()=>removeListItem(medinfo.id,medinfolist,setMedInfoList)}/>
          ))}
        
      <PreInput defaultvalue = {othermedicalinfo} inputlabel = 'Other Medical Information' onChange = {setOtherMedicalInfo}/>

      <Dropdown setvalue = {setObservation} items = {medinfotestlist} title = 'Observations'/>
      <Button buttonlabel = 'Add Selected Observations' onClick ={()=>addListItem(observation,observationlist, setObservationlist)}/>
     
          {observationlist.map((obs) => (
            <BookingListItem key= {obs.id} label={obs.desc} onClick={()=>removeListItem(obs.id ,observationlist, setObservationlist)}/> 
          ))}
        
      <PreInput defaultvalue = {otherobservations} inputlabel = 'Other Observations' onChange = {setOtherObservations}/>

      <Header2 title = 'Required Separation of Inmate'/>
      <PreInput defaultvalue = {reqsepinmate} inputlabel = '' onChange = {setReqSepInmate}/>

      <Header2 title = 'Comments'/>
      <PreInput defaultvalue = {comments} inputlabel = '' onChange = {setComments}/>

      <Header2 title = 'Manual Overrides'/>
      <PreInput defaultvalue = {bail} inputlabel = 'Manual Bail' onChange = {setBail}/>
      <PreInput defaultvalue = {sentence} inputlabel = 'Set Sentence' onChange = {setSentence}/>
      
      </div>}

      {parseInt(pg)===2 &&
      <div className = 'BookingReceiptPage'>
           <Header2 title='Booking Receipt'/>
           <h3>Booking ID:(Will be generated and shown when booking is finalized)</h3>
           <h3>Booking Clerk ID: {bookingclerkid}</h3>
           <div className = 'BookingReceiptBasicInfo'>
           <label className = 'BookingReceiptTitle'>Basic Information</label>
           <pre className = 'BookingReceiptText'>{`
             First Name: ${firstname}  Middle Name: ${middlename}  Last name: ${lastname}  Suffix: ${suffix}
             Also Known As: ${aka} Date of Birth: ${dob} Age: ${age} 
             Place of Birth: ${placeofbirth} Foreign National: ${foreignnational} Social Security Number: ${ssn}
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
             Apartment Number: ${apartmentnumbertemp}  City: ${citytemp} State: ${statetemp} Zipcode: ${zipcodetemp}
             Telephone Number: ${telephonenumbertemp}
             `}</pre></div>}

            <div className = 'BookingReceiptPhysicalDescription'>
            <label className = 'BookingReceiptTitle'>Physical Description</label>
            <pre className = 'BookingReceiptText'>{`
             Sex: ${sex}  Descent: ${descent}  Hair Color: ${haircolor}  Eye Color: ${eyecolor}  Height: ${height}
             Scars Marks and Tattoos:`}</pre>
            {smtlist.map((mysmt) => (
            <pre key= {mysmt.id} >{`
            ${mysmt.desc}`}</pre>
          ))}
            <pre className = 'BookingReceiptText'>{`Unusual Scars Marks and Tattoos: ${unusualsmt}`}</pre>
             </div>

             <div className = 'BookingReceiptArrestDetails'>
            <label className = 'BookingReceiptTitle'>Arrest Details</label>
            <pre className = 'BookingReceiptText'>{`
             Date and Time Arrested: ${datetimearrested}  Arresting Agency: ${arrestingagency}  Arrest Location: ${arrestlocation}
             Charges: Charges need to Be Added`}</pre>
            {smtlist.map((mysmt) => (
            <pre key= {mysmt.id} >{`
            ${mysmt.desc}`}</pre>
          ))}
            <pre className = 'BookingReceiptText'>{`
             Arresting Officer Department ID: ${arrestofficerid}  Transporting Officer Department ID: ${transportofficerid}
             Searching Officer Department ID: ${searchingofficerid}  Department Report Number: ${deprepnum}
             `}</pre>
             </div>

             {driverslicensenumber&&
            <div className = 'BookingReceiptVehicleInformation'>
            <label className = 'BookingReceiptTitle'>Vehicle Information</label>
            <pre className = 'BookingReceiptText'>{`
             Drivers License Number: ${driverslicensenumber}  Drivers License State: ${driverslicensestate}  Vehicle License Number: ${vehiclelicensenumber} Vehicle License State: ${vehiclelicensestate} 
             Vehicle Year: ${vehicleyear}  Vehicle Make: ${vehiclemake}  Vehicle Color: ${vehiclecolor}  Vehicle Disposition: ${vehicledisposition}
             Impound Company: ${impoundcompany}  Parked Location: ${parkedlocation} Parked City: ${parkedcity}  Parked Other: ${parkedother}
             `}</pre></div>}
    
            <div className = 'BookingReceiptAdditionalInmateInformation'>
            <label className = 'BookingReceiptTitle'>Additional Inmate Information</label>
            <pre className = 'BookingReceiptText'>{`
             Special Identifiers: ${specialid}  Gang Affiliation: ${gangaffl} Gang Location: ${gangloc} Membership Status: ${gangstatus}
             `}</pre></div>

           <div className = 'BookingReceiptEmergencyContact'>
           <label className = 'BookingReceiptTitle'>Emergency Contact</label>
           <pre className = 'BookingReceiptText'>{`
             First Name: ${ecfirstname}  Middle Name: ${ecmiddlename}  Last name: ${eclastname}  Suffix: ${ecsuffix} Relation: ${ecrelation}
             Street Address: ${ecstreetaddress}
             Apartment Number: ${ecapartmentnumber}  City: ${eccity} State: ${ecstate} Zipcode: ${eczipcode}
             Telephone Number: ${ectelephonenumber} 
             `}</pre>
             </div>

           <div className = 'BookingReceiptEmploymentInformation'>
           <label className = 'BookingReceiptTitle'>Employment Information</label>
           <pre className = 'BookingReceiptText'>{`
             Occupation: ${occupation}  Skills: ${skills}  Highest Grade Complete: ${highgradecomp}  Ability to Understand Directions in English: ${abdirection} 
             Employer: ${employer}  Business Type: ${biztype}  Position: ${position}
             Street Address: ${emstreetaddress}
             Suite Number: ${emsuitenumber}  City: ${emcity} State: ${emstate} Zipcode: ${emzipcode}
             Telephone Number: ${emtelephonenumber} 
             `}</pre>
             </div>





             


           

      </div>
      }
    

      <LinkButton linklabel = 'Logout' link = '/'/>
      {parseInt(pg) == 1 && <div><Button buttonlabel = 'Confirm Input' onClick = {confirmInput}/></div>}
      {parseInt(pg) >= 2 && <div><Button buttonlabel = 'Back' onClick = {back}/></div>}
      </div>
    )
}
export default BookingCreationPage