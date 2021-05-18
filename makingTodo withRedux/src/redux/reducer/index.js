import { combineReducers } from "redux";
import { showTodo } from "./showTodo";
import { inputTODO } from "./inputTodo";

export default combineReducers({
    inputTODO,
    showTodo
})
