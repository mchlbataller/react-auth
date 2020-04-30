import React from "react";
import { Switch, Route } from "react-router-dom";
import Success from "app/pages/home/Home";
import Navbar from "app/components/Navbar";
import Login from "app/pages/login/Login";
import Landing from "app/pages/landing/Landing";

import RouteProtector from "services/routeProtector";

function AppRouter() {
    return (
        <React.Fragment>
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
