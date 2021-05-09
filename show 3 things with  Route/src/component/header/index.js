import "./style.css"
import {Link, useLocation} from "react-router-dom"
import { PATH } from "../../config/webPath"

const Header=()=>{
    let Location=(useLocation()).pathname
    const style={borderBottom:"1px solid black"}
    return(
        <>
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link className="Link"style={Location===PATH.HOME?style:null} to={PATH.HOME}>Home</Link></li>
                        <li><Link className="Link" style={Location===PATH.POST?style:null}  to={PATH.POST}>Post</Link></li>
                        <li><Link to="/login"  id="signUp" style={Location===PATH.LOGIN?style:null} className="login Link">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}
export default Header