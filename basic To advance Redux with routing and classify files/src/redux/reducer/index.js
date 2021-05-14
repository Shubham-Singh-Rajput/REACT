import  {combineReducers} from "redux"
import { Counter } from './Counter';
import { TIMER} from "./Timer"
import USER from './user';
import SINGLEUSER from './singleUser';
export default combineReducers({
    Counter,
    TIMER,
    USER,
    SINGLEUSER
})