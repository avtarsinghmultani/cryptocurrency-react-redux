import { combineReducers } from "redux";
import analysisReducer from "../containers/Analysis/reducer";
import trendsReducer from "../containers/Trends/reducer";

export default combineReducers({
    analysisReducer,
    trendsReducer,
});