import { get, post, put, remove } from "../../networking/Server";
import {
    ADVERT_TYPES,
    ADVERT_TIMES,
    MY_ADVERTS,
    CREATE_ADVERT,
    UPDATE_ADVERT,
    FIND_ADVERT,
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    DELETE_ADVERT,
    ADVERTS
} from "./ActionTypes";
import { success, error } from '../../functions/toast'

export const advertType = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/advertType/').then((data) => {
            console.log(data)
            if (data.result) {
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

export const advertTime = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/advertTime/').then((data) => {
            console.log(data)
            if (data.result) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: ADVERT_TIMES, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti gibi')
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

export const allAdverts = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/advert/').then((data) => {
            if (data.result) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: ADVERTS, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            error("Bir şeyler ters gitti")
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
            error("Bir şeyler ters gitti")
        });
    }
};

export const findAdvert = (advert_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get(`/api/advert/${advert_id}`).then((data) => {
            console.log(data)
            if (!data) {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti')
            } else {
                dispatch({ type: FIND_ADVERT, payload: data });
                dispatch({ type: FETCH_SUCCESS });
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            error("Bir şeyler ters gitti")
        });
    }
};


export const editAdvert = (data) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        console.log(data)
        put(`/api/advert/${data.advert_id}`, data).then((data) => {
            console.log(data)
            if (data === 1) {
                success("İlan başarılı bir şekilde güncellendi")
                dispatch({ type: UPDATE_ADVERT, payload: data.data });
                dispatch({ type: FETCH_SUCCESS });
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

export const showAdvert = (advert_id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        put(`/api/advert/show/${advert_id}`).then((data) => {
            console.log(data)
            if (data) {
                success("İlan başarılı bir şekilde güncellendi")
                dispatch({ type: MY_ADVERTS, payload: data });
                dispatch({ type: FETCH_SUCCESS });
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