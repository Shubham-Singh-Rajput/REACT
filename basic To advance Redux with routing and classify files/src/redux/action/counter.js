import { ActionType } from "../actionTypes";

export const COUNTER={
    increment:payload=>({
        type:ActionType.INCCOUNTER,
        payload
    }),
    decrement:payload=>({
        type:ActionType.DECCOUNTER,
        payload
    })
}