import { FETCH_ANALYSIS, FETCH_ANALYSIS_FULFILLED, FETCH_ANALYSIS_REJECTED } from './CONSTANTS'
import { SERVER_NOT_FOUND } from "../../CONSTANTS";
const initialState = {
    fetching: false,
    fetched: false,
    analysis:[],
    errors:[],
}

const analysisReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ANALYSIS:
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
        case FETCH_ANALYSIS_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                analysis: action.payload,
                errors: []
            }
        case FETCH_ANALYSIS_REJECTED:
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

export default analysisReducer;