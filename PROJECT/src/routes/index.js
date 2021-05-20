import PATH from "../config/webPath"
import Home from "../container/Home"
import Profile from "../container/Profile"

const routes=[
    {exact:true , path:PATH.HOME , component:Home},
    {exact:true , path:PATH.PROFILE , component:Profile}
]

export default routes