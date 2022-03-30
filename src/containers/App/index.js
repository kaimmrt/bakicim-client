import React, { memo, useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../appRedux/actions";
import { setInitUrl } from "../../appRedux/actions/Auth";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import { post } from "../../networking/Server";

import '../../style/Auth.css'
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import MainApp from "./MainApp";
import Home from '../HomePage/Home';

const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                :
                <Redirect
                    to={{
                        pathname: '/home',
                        state: { from: location }
                    }}
                />}
    />;

const App = () => {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const dispatch = useDispatch();
    const { token, initURL, loadingAuthUser, authUser } = useSelector(({ auth }) => auth);

    const fetchUser = () => {

        if (location.pathname === '/home')
            return

        post('api/me')
            .then(res => {
                if (res) {
                    console.log(res)
                }
            })
    }

    useEffect(() => {
        console.log("Auth user:", authUser)
        dispatch(getUser(token));
    }, [dispatch]);


    useEffect(() => {
        if (initURL === '') {
            dispatch(setInitUrl(location.pathname));
        }
    }, [dispatch, initURL, location.pathname]);


    useEffect(() => {
        fetchUser()

        if (location.pathname === '/') {
            if (authUser === null) {

                history.push('/home');
            } else if (initURL === '' || initURL === '/' || initURL === '/home') {
                history.push('/sample');
            } else {
                history.push(initURL);
            }
        }
    }, [authUser, initURL, location, history]);


    return loadingAuthUser ? <CircularProgress /> : (
        <ConfigProvider>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <RestrictedRoute path={`${match.url}`} authUser={authUser} location={location} component={MainApp} />
            </Switch>
        </ConfigProvider>
    )
}

export default memo(App);

