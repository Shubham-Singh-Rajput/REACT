import { combineReducers } from "redux"

import { allProduct } from "./allProduct"
import { productDetail } from "./productDetail"
export default combineReducers({
    allProduct,
    productDetail
})
