import { get, post } from "../../networking/Server";
import {
    WORK_TYPES,
    MY_WORK_TYPE_PRICES,
    CREATE_WORK_TYPE_PRICE,
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS
} from "./ActionTypes";
import { success, error } from '../../functions/toast'

export const workTypes = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/work_type').then((data) => {
            if (data.result) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: WORK_TYPES, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};

export const myWorkTypePrices = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/work_type_price/').then((data) => {
            if (data.result) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: MY_WORK_TYPE_PRICES, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};

export const createWorkTypePrice = (input) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        post('/api/work_type_price/', input).then((data) => {
            if (data.result) {
                success("İlan başarılı bir şekilde oluşturuldu")
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: CREATE_WORK_TYPE_PRICE, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            }
        }).catch(function (err) {
            console.log(err)
            dispatch({ type: FETCH_ERROR, payload: err.message });
            error("Bir şeyler ters gitti")
        });
    }
};