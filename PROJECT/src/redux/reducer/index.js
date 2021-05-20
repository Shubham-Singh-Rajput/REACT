import { combineReducers } from "redux";

import Video from "./Video";
import loder from "./Loder";
import Search from "./Search";
export default combineReducers({
    Video,
    loder,
    Search
})