import { actionTypes } from "../actionType"

const inputChange=(value)=>(dispatch)=>{
        dispatch({
            type:actionTypes.ADDINPUTTEXT,
            payload:value
        })
        return 
    }
   

export default inputChange