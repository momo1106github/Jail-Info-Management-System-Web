import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Redirect = ({departmentid, role, desturl}) => {
    const history = useHistory();
    const location = useLocation();
    if(!departmentid&&!role&&location.pathname!==desturl){
        history.push(desturl);
    }

    return null;
}
export default Redirect