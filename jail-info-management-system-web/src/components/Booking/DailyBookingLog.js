import Header from '../Header'

//Displays the Daily Booking Log
const DailyBookingLog = () => {


  //default values to be replaced, for Data Fetched from server
  const inmatelist = [
    {bookingid:'213123', firstname: 'Thomas', middlename: "Edwards", lastname: "Stevens", suffix:"jr.",
     bookingtime:"1/2/19 7:00PM", arrestingagency: "Station 1", arrestlocation:"New Jersey",
    dateofbirth: "1/1/95", sex:"Male", descent: "Caucasian", documentnumber: "124214", charges:"Assault, Robbery" },
    {bookingid:'2133213', firstname: 'Mary', middlename: "Edwards", lastname: "Stevens", suffix:"jr.",
    bookingtime:"1/2/19 7:00PM", arrestingagency: "Station 1", arrestlocation:"New Jersey",
   dateofbirth: "1/1/95", sex:"Female", descent: "Caucasian", documentnumber: "124214", charges:"Assault, Robbery" }
    
  ]

  return (
    <div className= 'DailyBookingLog'>
       <Header title = "Daily Booking Log"/>
       {inmatelist.map((inmate) => (
        <div clasName="DailyBookingLogEntry" key = {inmate.bookingid}>
          <pre className = "DailyBookingLogEntryText">{`
          Inmate Name: ${inmate.firstname} ${inmate.middlename} ${inmate.lastname} ${inmate.suffix}  Date of Birth: ${inmate.dateofbirth}  Sex: ${inmate.sex}  Descent: ${inmate.descent}
          Booking ID: ${inmate.bookingid}    Booking Time: ${inmate.bookingtime}   Arresting Agency: ${inmate.arrestingagency}   Arrest Location: ${inmate.arrestlocation}
          Document Number: ${inmate.documentnumber}  Charges: ${inmate.charges}`}</pre>
        </div>
      ))}
        
    </div>)
}
export default DailyBookingLog