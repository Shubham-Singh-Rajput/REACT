import { ActionType } from "../actionTypes";

export const USERS={
    AllUSER:payload=>({
        type:ActionType.USER,
        payload
    }),
    SINGLEUSER:payload=>({
        type:ActionType.USERDETAIL,
        payload
    })
}