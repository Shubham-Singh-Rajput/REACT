import { applyMiddleware, compose, createStore } from "redux";
import Thunk from "../middleWere";

import reducer from "../reducer";
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
export default createStore(reducer,composer(applyMiddleware(Thunk)))