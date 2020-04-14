import "./home.scss";
import Progress from "./Progress";
import React from "react";

function Home() {
    return (
        <div>
            <h1 className="text-center">This site shows my progress in learning React.</h1> 
            <Progress />
        </div>
    ) 
}

export default Home;