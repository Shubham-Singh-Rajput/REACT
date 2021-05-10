
import {Link,} from "react-router-dom"
import { PATH } from "../../config/webPath"
import "./style.css"

const header=()=>{
    
    return(
        <>
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link className="Link" to={PATH.HOME}>Home</Link></li>
                        <li><Link className="Link" to={PATH.POST}>Post</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}
export default header