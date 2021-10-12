import Header from './Header'
import LinkButton from './LinkButton'

const HomePage = () => {

    return (
      <div className= "Home Page">
      <LinkButton linklabel = 'Home' link="/home"/>
      <Header title='Home'/>
      <Header title = "Pages"/>
      <LinkButton linklabel = 'Booking' link ='/bookingcreate'/>
      <LinkButton linklabel = 'Logout' link = '/'/>
    </div>
    )
}
export default HomePage