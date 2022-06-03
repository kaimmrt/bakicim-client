import { get, post, put, remove } from "../../networking/Server";
import {
    CREATE_OFFER,
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
} from "./ActionTypes";
import { success, error } from '../../functions/toast'

export const createOffer = (input) => {
    console.log(input)
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        post('/api/offer/', input).then((data) => {
            if (data.result) {
                success("Teklif başarılı bir şekilde oluşturuldu")
                dispatch({ type: CREATE_OFFER, payload: data.data });
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