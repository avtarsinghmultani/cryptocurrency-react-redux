import { SERVER_NOT_FOUND } from "../../CONSTANTS";
import { FETCH_TRENDS, FETCH_TRENDS_FULFILLED, FETCH_TRENDS_REJECTED } from "./CONSTANTS";

const initialState = {
    fetching: false,
    fetched: false,
    trends:[],
    errors:[],
    result:"",
}

const trendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRENDS:
            return {
                ...state,
                fetching: true
            }
        case SERVER_NOT_FOUND:
            return {
                ...state,
                fetching: false,
                fetched : false,
                errors: [action.payload]
            }
        case FETCH_TRENDS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                trends: action.payload,
                errors: []
            }
        case FETCH_TRENDS_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched : false,
                errors: [action.payload]
            }
        default:
            return state
    }
}

export default trendsReducer;