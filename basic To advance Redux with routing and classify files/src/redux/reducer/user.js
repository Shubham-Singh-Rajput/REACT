import { ActionType } from "../actionTypes"

const initialState=[]
const USER=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case ActionType.USER:
            return [...action.payload]
        default:
            return state
    }
}
export default USER