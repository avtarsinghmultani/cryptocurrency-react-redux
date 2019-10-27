import axios from "axios";
import {SERVER_NOT_FOUND} from "../../CONSTANTS";
import {FETCH_TRENDS, FETCH_TRENDS_FULFILLED, FETCH_TRENDS_REJECTED, TRENDS_URL} from "./CONSTANTS";

export const fetchTrends = () => dispatch => {

    dispatch({type: FETCH_TRENDS})
    axios.get(TRENDS_URL)
        .then(result => {
            dispatch({type: FETCH_TRENDS_FULFILLED, payload: result.data})
        })
        .catch((error) => {
            if (error.message === "Network Error" )
                dispatch({type: SERVER_NOT_FOUND, payload: 'The server is currently offline. Please try again later.'})
            else
                dispatch({type: FETCH_TRENDS_REJECTED, payload: error.response.data})
        })
}