import React from "react";
import { Switch, Route } from "react-router-dom";
import Success from "app/pages/home/Home";
import Navbar from "app/components/Navbar";
import { Login, Register } from "app/pages/auth";
import Landing from "app/pages/landing/Landing";

import RouteProtector from "services/routeProtector";

function AppRouter() {
    return (
        <>
            <div className="container-main lg:mx-48">
                <Switch>
                    <Route path="/register" exact>
                        <Navbar linkToHome="/" loginPrompt="Login" />
                        <Register />
                    </Route>
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
        </>
    );
}

export default AppRouter;
