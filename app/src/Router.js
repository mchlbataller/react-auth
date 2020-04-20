import React from "react";
import { Switch, Route } from "react-router-dom";
import Success from "app/pages/home/home";
import Navbar from "app/components/Navbar";
import Login from "app/pages/login/Login";
import Landing from "app/pages/landing/Landing";

import VerifyJWT from "services/authService";

function AppRouter() {
    return (
        <React.Fragment>
            <Navbar />

            <div className="container-main mx-48">
                <Switch>
                    <Route path="/login/success">
                        <VerifyJWT next="/login/success" />
                        <Success />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default AppRouter;
