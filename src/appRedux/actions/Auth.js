import Axios from "../../networking/Axios";
import { post } from "../../networking/Server";
import {
    INIT_URL,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    USER_TOKEN_SET,
    USER_DATA,
    UPDATE_LOAD_USER,
    SIGNOUT_USER_SUCCESS,
} from "./ActionTypes";
import { success, error } from '../../functions/toast'

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};

export const userSignUp = ({ values, user_type_id }) => {
    const { email, password, name } = values
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        post('/register', {
            email: email,
            password: password,
            username: name,
            user_type_id: user_type_id
        }
        ).then(({ data }) => {
            if (data.result) {
                success('İşlem başarılı')
                localStorage.setItem("token", data.token.access_token);
                Axios.defaults.headers.common['x-access-token'] = "Bearer " + data.token.access_token;
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: USER_TOKEN_SET, payload: data.token.access_token });
                dispatch({ type: USER_DATA, payload: data.user });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('İşlem Başarısız')
            }

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};


export const userSignIn = ({ email, password, user_type_id }) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        Axios.post('/login', {
            email: email,
            password: password,
            user_type_id
        }
        ).then(({ data }) => {
            if (data.result) {
                localStorage.setItem("token", data.user.token);
                Axios.defaults.headers.common['x-access-token'] = "Bearer " + data.user.token;
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: USER_TOKEN_SET, payload: data.user.token });
                dispatch(getUser(data.user.token));
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
                error('işlem başarısız')
            }
        }).catch(function (err) {
            dispatch({ type: FETCH_ERROR, payload: err.message });
            error('Kullanıcı adı veya şifre hatalı!')
        });
    }
};

export const getUser = (token) => {
    return (dispatch) => {
        if (!token) {
            const token = localStorage.getItem('token');
        }
        Axios.defaults.headers.common['x-access-token'] = 'Bearer ' + token;

        dispatch({ type: FETCH_START });
        Axios.post('/api/me',
        ).then(({ data }) => {
            if (data.result) {

                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: USER_DATA, payload: data.user });

            } else {
                localStorage.removeItem("token");
                dispatch({ type: FETCH_ERROR, payload: data.error });
                dispatch({ type: UPDATE_LOAD_USER, payload: false });

            }
        }).catch(function (error) {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: UPDATE_LOAD_USER, payload: false });
        });
    }
};

export const userSignOut = () => {

    return (dispatch) => {
        dispatch({ type: FETCH_START });

        Axios.post('/logout').then(({ data }) => {
            if (data.result) {

                localStorage.removeItem("token");
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: SIGNOUT_USER_SUCCESS });
            } else {
                dispatch({ type: FETCH_ERROR, payload: data.error });
            }
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
        });
    }
};