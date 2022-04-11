import { combineReducers } from "redux";
import Auth from "./Auth";
import Common from "./Common";
import WorkType from "./WorkType";
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: Auth,
    common: Common,
    workType: WorkType
});
