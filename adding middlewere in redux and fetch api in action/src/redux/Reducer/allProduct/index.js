import { ActionTypes } from "../../ActionType"

const initialState=[]
export const allProduct=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case ActionTypes.PRODUCT:
            return [...action.payload]
        default:
            return state
    }

}
