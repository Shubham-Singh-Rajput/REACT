import { Link} from "react-router-dom"
import { PATH } from "../../config/webPath"

const Header=()=>{
    return (
        <>
            <nav className="navbar navbar-light " style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={PATH.HOME}>Home</Link>
                <Link className="navbar-brand" to={PATH.INPUTTODO}>InputTodo</Link>
                <Link className="navbar-brand" to={PATH.SHOWTODO}>ShowTodo</Link>
            </div>
            </nav>
        </>
    )
}
export default Header