import { MY_ADVERTS, ADVERT_TYPES, CREATE_ADVERT, DELETE_ADVERT, FIND_ADVERT } from "../actions/ActionTypes";

const INIT_STATE = {
    advert_types: [],
    advert: {},
    my_adverts: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADVERT_TYPES: {
            return {
                advert_types: action.payload,
            }
        }
        case CREATE_ADVERT: {
            return {
                ...state
            }
        }
        case MY_ADVERTS: {
            return {
                my_adverts: action.payload
            }
        }
        case FIND_ADVERT: {
            return {
                ...state,
                advert: action.payload
            }
        }
        case DELETE_ADVERT: {
            return {
                my_adverts: state.my_adverts.filter(value => value.advert_id !== action.payload)
            }
        }
        default:
            return state;
    }
}
