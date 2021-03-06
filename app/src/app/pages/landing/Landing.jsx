import "./Landing.scss";
import Progress from "./Progress";
import React from "react";

function Landing() {
    return (
        <div className="pt-24 px-5 lg:pt-0">
            <h1 className="text-center text-3xl font-light">
                This app is my coding playground.
            </h1>
            <Progress />
        </div>
    );
}

export default Landing;
