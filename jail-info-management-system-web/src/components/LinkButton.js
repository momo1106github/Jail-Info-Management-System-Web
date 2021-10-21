import {Link} from 'react-router-dom'

const LinkButton = ({linklabel, link}) => {
    
    return (
        <div className= 'Link'>
            <Link className = 'lnk' to = {link}>
                {linklabel}
            </Link>

        </div>
    )
}
export default LinkButton;