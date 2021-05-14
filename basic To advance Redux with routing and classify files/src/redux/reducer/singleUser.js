import { ActionType } from "../actionTypes"

const initialState={}
const SINGLEUSER=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case ActionType.USERDETAIL:
            return {...action.payload}
        default:
            return state
    }
}
export default SINGLEUSER