
import counter from '../container/counter';
import product from '../container/product';
import { PATH } from './../config/webPath';
import Timers from './../container/Timer/index';
import USER from './../container/AllUser/index';
import UserDetail from '../container/Userdetail';
export const routes=[
    {exact : true ,path:PATH.HOME ,component:Timers },
    {exact : true ,path:PATH.COUNTRE ,component:counter },
    {exact : true ,path:PATH.PRODUCT ,component:product },
    {exact : true ,path:PATH.USER ,component:USER },
    {exact : true ,path:PATH.USERDETAIL ,component:UserDetail }
]