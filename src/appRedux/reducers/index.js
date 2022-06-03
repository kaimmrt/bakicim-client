import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";
import Advert from "./Advert";
import Favorite from "./Favorite";
import { connectRouter } from 'connected-react-router'
import Offer from "./Offer";

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common,
    advert: Advert,
    favorite: Favorite,
    offer: Offer
});
