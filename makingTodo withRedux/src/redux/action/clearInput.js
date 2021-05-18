import { actionTypes } from "../actionType"

const clearInput=(dispatch)=>{
    dispatch({
        type:actionTypes.CLEARINPUTTEXT
    })
    return
}

export default clearInput