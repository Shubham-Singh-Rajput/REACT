import { actionTypes } from "../actionType"

const showTodo=(data)=>(dispatch)=>{

    dispatch({
        type:actionTypes.SHOWTODO,
        payload:data
    })
    return 
}
export default showTodo