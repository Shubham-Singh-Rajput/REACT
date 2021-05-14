import { Link } from "react-router-dom"
import { PATH } from './../../config/webPath';
const Header=()=>{
    return (
        <>
            <ul>
                <li>
                    <Link to={PATH.HOME}>HOME</Link></li>
                    <li><Link to={PATH.COUNTRE}>counter</Link></li>
                    <li><Link to={PATH.USER}>USER</Link></li>
                    <li><Link to={PATH.PRODUCT}>Buy Product</Link>
                </li>
            </ul>
        </>
    )
}
export default Header