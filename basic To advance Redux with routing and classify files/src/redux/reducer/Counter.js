import { ActionType } from "../actionTypes"

const initialState=0
export const Counter=(state,action)=>{
    state=state||initialState
    switch (action.type){
        case ActionType.INCCOUNTER:
            return state+1
        case ActionType.DECCOUNTER:
            return state-1
        default:
            return state
    }
}