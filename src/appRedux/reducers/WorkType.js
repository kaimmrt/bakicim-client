import { MY_WORK_TYPE_PRICES, WORK_TYPES, CREATE_WORK_TYPE_PRICE } from "../actions/ActionTypes";

const INIT_STATE = {
    work_types: [],
    my_work_type_prices: [],
    loading: true,
};

export default (state = INIT_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        case WORK_TYPES: {
            return {
                work_types: action.payload,
                loading: false
            }
        }
        case CREATE_WORK_TYPE_PRICE: {
            return {
                ...state,
                // my_work_type_prices: [action.payload, ...state.my_work_type_prices],
                // my_work_type_prices: [action.payload],
                loading: false
            }
        }
        case MY_WORK_TYPE_PRICES: {
            return {
                loading: false,
                my_work_type_prices: action.payload
            }
        }
        default:
            return state;
    }
}
