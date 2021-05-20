import { SEARCH } from "../ActionTypes"

const  initialState=''
const Search=(state,action)=>{
    state=state||initialState
    if(action.type===SEARCH.INPUT){
        return action.payload
    }
    else{
        return state
    }
}

export default Search