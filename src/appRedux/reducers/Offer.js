import { CREATE_OFFER } from "../actions/ActionTypes";

const INIT_STATE = {
    my_offers: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_OFFER: {
            return {
                ...state,
                my_offers: action.payload
            }
        }
        default:
            return state;
    }
}
