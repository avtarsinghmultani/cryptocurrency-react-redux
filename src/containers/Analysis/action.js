import {ANALYSIS_URL, FETCH_ANALYSIS, FETCH_ANALYSIS_FULFILLED, FETCH_ANALYSIS_REJECTED} from './CONSTANTS'
import { CURRENCY_BASE_URL, SERVER_NOT_FOUND } from "../../CONSTANTS";
import axios from 'axios';

export const fetchAnalysis = () => dispatch => {
    dispatch({type: FETCH_ANALYSIS})
    axios.get(ANALYSIS_URL)
        .then(result => {
            dispatch({type: FETCH_ANALYSIS_FULFILLED, payload: result.data})
        })
        .catch((error) => {
            if (error.message === "Network Error" )
                dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'})
            else{
                dispatch({type: FETCH_ANALYSIS_REJECTED, payload: error.response.data})
                console.log(error.response.data);
            }
        })
}