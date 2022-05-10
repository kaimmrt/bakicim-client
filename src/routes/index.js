import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../util/asyncComponent";
import { useSelector } from "react-redux";

const App = ({ match }) => {
    const authUser = useSelector(({ auth }) => auth.authUser);

    return (
        <Switch>
            {
                authUser.user_type_id == 2
                    ?
                    <Route path={`${match.url}sample`} component={asyncComponent(() => import('./Dashboard/Dashboard'))} />

                    :
                    <>
                        <Route path={`${match.url}sample`} component={asyncComponent(() => import('./Dashboard/Dashboard'))} />
                        <Route path={`${match.url}profile`} component={asyncComponent(() => import('./Caregiver/Profile/ProfileInfo'))} />
                        <Route path={`${match.url}ilan_ekle`} component={asyncComponent(() => import('./Advert/AddAdvert'))} />
                        <Route path={`${match.url}ilanlarım`} component={asyncComponent(() => import('./Advert/MyAdverts'))} />
                        <Route path={`${match.url}ilan_duzenle/:advert_id`} component={asyncComponent(() => import('./Advert/EditAdvert'))} />
                    </>

            }
        </Switch>
    )
};

export default App;
