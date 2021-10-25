import Header from './Header'
import LinkButton from './LinkButton'

const HomePage = () => {

    return (
      <div className= "HomePage">
      <LinkButton linklabel = 'Home' link="/home"/>
      <Header title='Home'/>
      <Header title = "Pages"/>
      <LinkButton linklabel = 'Booking' link ='/bookingcreate/1'/>
      <LinkButton linklabel = 'Logout' link = '/'/>
    </div>
    )
}
export default HomePage