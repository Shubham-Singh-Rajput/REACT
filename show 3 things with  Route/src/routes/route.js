import Login from "../component/Login/logn"
import { PATH } from "../config/webPath"
import About from "./../component/AboutME"
import Post from "./../component/Post"


export const routes=[
    {exact:true , path:PATH.HOME , component:About},
    {exact:true , path:PATH.POST , component:Post},
    {exact:true , path:PATH.LOGIN , component:Login}
]