import { actionTypes } from "../actionType"

const initialState=''
export const inputTODO=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case actionTypes.ADDINPUTTEXT:
            return action.payload
        case actionTypes.CLEARINPUTTEXT:
            return ''
        default:
            return state
    }
}