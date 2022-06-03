import { CREATE_FAVORITE, FAVORITES } from "../actions/ActionTypes";

const INIT_STATE = {
    favorites: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_FAVORITE: {
            return {
                ...state,
                favorites: action.payload
            }
        }
        case FAVORITES: {
            return {
                favorites: action.payload
            }
        }
        default:
            return state;
    }
}
