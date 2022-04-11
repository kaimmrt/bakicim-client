import { MY_ADVERTS, ADVERT_TYPES, CREATE_ADVERT, DELETE_ADVERT, FETCH_START } from "../actions/ActionTypes";

const INIT_STATE = {
    advert_types: [],
    my_adverts: [],
    loading: true,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                loading: true
            }
        }
        case ADVERT_TYPES: {
            return {
                advert_types: action.payload,
                loading: false
            }
        }
        case CREATE_ADVERT: {
            return {
                loading: false
                // my_work_type_prices: [action.payload, ...state.my_work_type_prices],
                // my_work_type_prices: [action.payload],
            }
        }
        case MY_ADVERTS: {
            return {
                loading: false,
                my_adverts: action.payload
            }
        }
        case DELETE_ADVERT: {
            return {
                loading: false,
                my_adverts: state.my_adverts.filter(value => value.advert_id !== action.payload)
            }
        }
        default:
            return state;
    }
}
