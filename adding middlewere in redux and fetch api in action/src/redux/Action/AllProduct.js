import { ActionTypes } from "../ActionType"



export const PRODUCTS={
    Product:(id)=>{
        return (dispatch)=>{
            const path=id?`https://fakestoreapi.com/products/${id}`:`https://fakestoreapi.com/products`
            fetch(path).then(d=>d.json()).then(d=>{
                let type=id?ActionTypes.PRODUCTDETAIL:ActionTypes.PRODUCT
                dispatch({
                    type:type,
                    payload:d
                })
            })
            return
        }
    }
}