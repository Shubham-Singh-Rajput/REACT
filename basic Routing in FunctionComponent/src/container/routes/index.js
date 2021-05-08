import Home from "../../component/Home"
import Product from "./../../component/Product"
import {PATH} from "./../../config/webRoute"

export const route=[
    {exact:true,path:`${PATH.HOME}`,component:Home},
    {exact:true,path:`${PATH.PRODUCT}`,component:Product}
]