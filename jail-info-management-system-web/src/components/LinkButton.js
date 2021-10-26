import {Link} from 'react-router-dom'
import './LinkButton.css'
const LinkButton = ({linklabel, link, page}) => {
    
    return (
        <div className= 'Link'>
            <Link className = {page} to = {link}>
                {linklabel}
            </Link>

        </div>
    )
}
export default LinkButton;