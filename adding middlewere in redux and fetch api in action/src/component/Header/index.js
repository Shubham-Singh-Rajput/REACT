import { Link } from "react-router-dom"
import { Path } from "../../config/webPath"

const Header=()=>{

    return(
        <>
        <ul>
            <li>
            <Link to={Path.HOME}>Home</Link>
            </li>
            <li>
                <Link to={Path.PRODUCT}>Product</Link>
            </li>
        </ul>
        </>
    )
}
export default Header
