import { get, post, remove } from "../../networking/Server";
import {
    ADVERT_TYPES,
    MY_ADVERTS,
    CREATE_ADVERT,
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    DELETE_ADVERT
} from "./ActionTypes";
import { success, error } from '../../functions/toast'

export const advertType = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/advertType/').then((data) => {
            if (data.result) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: ADVERT_TYPES, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti gibi')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};

export const myAdverts = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/advert/').then((data) => {
            if (data.result) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: MY_ADVERTS, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};

export const createAdvert = (input) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        post('/api/advert/', input).then((data) => {
            if (data.result) {
                success("İlan başarılı bir şekilde oluşturuldu")
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: CREATE_ADVERT, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti mi acaba')
            }
        }).catch(function (err) {
            dispatch({ type: FETCH_ERROR, payload: err.message });
            error("Bir şeyler ters gitti gibi duruyor")
        });
    }
};

export const deleteAdvert = (advert_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        remove(`/api/advert/${advert_id}`).then((data) => {
            if (data.result) {
                success("İlan başarılı bir şekilde silindi")
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: DELETE_ADVERT, payload: advert_id });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            }
        }).catch(function (err) {
            dispatch({ type: FETCH_ERROR, payload: err.message });
            error("Bir şeyler ters gitti")
        });
    }
};