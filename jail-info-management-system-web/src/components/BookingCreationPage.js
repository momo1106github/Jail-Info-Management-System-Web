import Input from './Input'
import Header from './Header'
import LinkButton from './LinkButton'


const BookingCreationPage = () => {

    return (
      <div className= "Booking Page">
      <LinkButton linklabel = 'Home' link = '/home'/>
      <Header title='Booking Creation'/>
      <Input inputlabel = 'First Name '/>
      <Input inputlabel = 'Last Name '/>
      <LinkButton linklabel = 'Logout' link = '/'/>
      </div>
    )
}
export default BookingCreationPage