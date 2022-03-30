import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, } from "./ActionTypes";

export const fetchStart = () => {
    return {
        type: FETCH_START
    }
};

export const fetchSuccess = () => {
    return {
        type: FETCH_SUCCESS
    }
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
};

