import Thunk from "../middlewere/thunk";
import reducer from "../reducer";

const { createStore, compose, applyMiddleware } = require("redux");
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

export default createStore(reducer,composer(applyMiddleware(Thunk)))