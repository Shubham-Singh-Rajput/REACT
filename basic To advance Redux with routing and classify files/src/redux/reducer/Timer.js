import { ActionType } from "../actionTypes";

const initalState=''

export  const TIMER=(state,action)=>{
    state=state||initalState
    switch (action.type) {
        case ActionType.TIMER:
            return action.payload
    
        default:
            return state
    }
}
