import { actionTypes } from "../actionType"

const initialState=[]
export const showTodo=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case actionTypes.SHOWTODO:
            return [...state,action.payload]
        default:
            return state
    }
}