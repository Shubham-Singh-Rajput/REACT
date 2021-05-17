import { ActionTypes } from "../../ActionType"
const initialState={}
export const productDetail=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case ActionTypes.PRODUCTDETAIL:
            return {...action.payload}
        default:
            return state
    }

}
