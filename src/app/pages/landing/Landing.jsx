import "./Landing.scss";
import Progress from "./Progress";
import React from "react";

function Landing() {
    return (
        <div>
            <h1 className="text-center text-3xl font-light">This site shows my progress in learning React.</h1> 
            <Progress />
        </div>
    ) 
}

export default Landing;