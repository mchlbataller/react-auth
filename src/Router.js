import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route, Link
} from "react-router-dom";
import Home from "./app/pages/home/Home";
import Navbar from "./app/components/Navbar";
import Login from "./app/pages/login/Login";
import Success from "./app/pages/success/Success";

function AppRouter() {
	return (
		<React.Fragment>
			<Navbar />

			<div className="content">
				<Switch>
					<Route path="/login/success">
						<Success />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>

		</React.Fragment>
	);
}


export default AppRouter;
