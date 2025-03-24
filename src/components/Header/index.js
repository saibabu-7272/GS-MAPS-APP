import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { FaMap } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";

import './index.css'

const Header = () =>{
    const navigate = useNavigate()
    const onLogout = () => {
        Cookies.remove("jwt_token")
        navigate('/login')
    }
    return(
        <nav className='header' >
            <Link className='link' to="/"><h1 className='website-name'>GS-MAPS</h1></Link>
            
            <ul className='tabs-container-desktop'>
                <li><Link to="/"><button className='tab-btn' type="button" >Dashboard</button></Link></li>
                <li><Link to="/map"><button className='tab-btn' type="button">Map</button></Link></li>
            </ul>
            <ul className='tabs-container-mobile'>
                <li><Link to="/"><RxDashboard className='tab-icon'/></Link></li>
                <li><Link to="/map"><FaMap className='tab-icon' /></Link></li>
            </ul>
            <button onClick={onLogout} className='logout-btn'>Logout</button>
        </nav>
    )
} 

export default Header