import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Router";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import "./app/assets/global.scss";
import "./app/assets/main.css";
import UserProvider from "./app/firebase-providers/UserProvider";

ReactDOM.render(
    <UserProvider>
        <Router>
            <AppRouter />
        </Router>
    </UserProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
