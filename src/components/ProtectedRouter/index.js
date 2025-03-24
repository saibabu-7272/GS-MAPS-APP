import { Navigate} from "react-router-dom"
import Cookies from 'js-cookie'
const ProtectedRouter = ({element}) => {
    const jwtToken = Cookies.get("jwt_token")
    console.log(element)
    console.log(jwtToken)
    if(jwtToken === undefined){
        return <Navigate to="/login" replace />
    }else{
        return element
    }
}

export default ProtectedRouter