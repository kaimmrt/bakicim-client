import { get, post, put, remove } from "../../networking/Server";
import {
    CREATE_FAVORITE,
    FIND_ADVERT,
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    FAVORITES,
} from "./ActionTypes";
import { success, error } from '../../functions/toast'

export const createOrDeleteFavorite = (input) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        post('/api/favorite/', input).then((data) => {
            if (data.result) {
                dispatch({ type: CREATE_FAVORITE, payload: data.data });
                dispatch({ type: FETCH_SUCCESS });
                if (data.type === 'create')
                    success('İlan favorilere eklendi.')
                else
                    success('İlan favorilerden kaldırıldı.')
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti gibi')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};

export const fetchFavorites = (input) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        get('/api/favorite/').then((data) => {
            console.log(data)
            if (data.result) {
                dispatch({ type: FAVORITES, payload: data.data });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('Bir şeyler ters gitti gibi')
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};