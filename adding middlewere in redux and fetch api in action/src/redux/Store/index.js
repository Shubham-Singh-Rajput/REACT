import {applyMiddleware, compose, createStore} from "redux"
import { Thunk } from "../middleWere/thunk"
import Reducer from "../Reducer"

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

export default createStore(Reducer,composer(applyMiddleware(Thunk)))