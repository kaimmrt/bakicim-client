import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";
import Advert from "./Advert";
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common,
    advert: Advert
});
