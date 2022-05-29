import { MY_ADVERTS, ADVERT_TYPES, ADVERT_TIMES, CREATE_ADVERT, DELETE_ADVERT, FIND_ADVERT, ADVERTS } from "../actions/ActionTypes";

const INIT_STATE = {
    advert_types: [],
    advert_times: [],
    advert: {},
    adverts: [],
    my_adverts: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADVERT_TYPES: {
            return {
                advert_types: action.payload,
            }
        }
        case ADVERT_TIMES: {
            return {
                advert_times: action.payload,
            }
        }
        case CREATE_ADVERT: {
            return {
                ...state
            }
        }
        case ADVERTS: {
            return {
                adverts: action.payload
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
