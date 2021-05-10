import Home from "../../component/Home";
import { PATH } from "../../config/webPath";
import Alluser from "../Post";
import SingleUser from "../SingleUser";

export const routes=[
    {exact:true  , path : PATH.HOME , component : Home},
    {exact : true , path : PATH.POST , component : Alluser },
    {exact : true , path : PATH.INFO , component : SingleUser }
    
]