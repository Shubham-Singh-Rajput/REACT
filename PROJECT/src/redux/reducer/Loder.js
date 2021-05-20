import { SCREENLODER } from "../ActionTypes"

const  initialState=false
const loder=(state,action)=>{
    state=state||initialState
    switch(action.type){
        case SCREENLODER.START:
            return true
        case SCREENLODER.STOP:
            return false
        default:
            return state
    }
}

export default loder