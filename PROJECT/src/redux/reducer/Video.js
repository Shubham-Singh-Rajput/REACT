import { VIDEO } from "../ActionTypes"

const initialState=[]

const Viedo=(state,action)=>{
    state=state||initialState
    if(action.type===VIDEO.VIDEOLIST){
        return [...action.payload]
    }
    else{
        return state
    }
}
export default Viedo
