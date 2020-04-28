import React from "react";
import { Switch, Route } from "react-router-dom";
import Success from "app/pages/home/home";
import Navbar from "app/components/Navbar";
import Login from "app/pages/login/Login";
import Landing from "app/pages/landing/Landing";

import { RouteProtector, HomeAfterAuth } from "services/authService";

function AppRouter() {
    let environment = process.env;
    return (
        <React.Fragment>
            {alert((environment.NODE_ENV === 'production' ? environment.REACT_APP_PROD_API : environment.REACT_APP_DEV_API) + '/auth')}
            <div className="container-main mx-48">
                <Switch>
                    <Route path="/login/success">
                        <Navbar linkToHome="/home" loginPrompt="Logout" />
                        <RouteProtector>
                            <Success />
                        </RouteProtector>
                    </Route>

                    <Route path="/login">
                        <Navbar linkToHome="/" loginPrompt="Login" />
                        <Login />
                    </Route>

                    <Route path="/home">
                        <Navbar linkToHome="/home" loginPrompt="Logout" />
                        <RouteProtector>
                            <Success />
                        </RouteProtector>
                    </Route>

                    <Route path="/">
                        <Navbar linkToHome="/" loginPrompt="Login" />
                        <Landing />
                    </Route>
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default AppRouter;
