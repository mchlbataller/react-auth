import React, { useState } from "react";
import axios from "axios";
import { H1 } from "app/components/text";

function Hooks(props) {
    // Declare a new state variable, which we'll call "count"
    const [username, setUsername] = useState("");
    const [request, setRequest] = useState("");
    const [test, setTest] = useState("");

    const url = process.env.REACT_APP_DEV_API + "/debug";

    const fetchUser = async (e) => {
        setTest("Fetching...");

        await axios
            .post(url, { username: e.target.value })
            .then((res) => {
                setRequest(JSON.stringify(res));
            })
            .then(() => {
                setTest("Fetching finished!");
            });
    };

    return (
        <div>
            <p>Fetching status: {test}</p>
            <p>Your request is {request}</p>
            <input
                type="text"
                onChange={fetchUser}
                className="border border-gray-800 ml-5 p-5 bg-gray-100"
            />
        </div>
    );
}

function submit(user, pass) {
    // URL config
    const url = process.env.REACT_APP_DEV_API + "debug";
    
    console.log(url);
}

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className="bg-gray-300 border border-gray-100 flex mx-auto w-1/3 flex flex-col p-5">
            <p className="flex-1 mx-auto p-5 font-light text-2xl">Login</p>
            <input
                type="text"
                className="flex-1 p-2  my-2 mx-5 bg-gray-100 border rounded-sm border"
                onChange={(e) => {
                    setUser(e.target.value);
                }}
            />
            <input
                type="password"
                className="flex-1 p-2 my-2 mx-5 bg-gray-100 border rounded-sm border"
                onChange={(e) => {
                    setPass(e.target.value);
                }}
            />
            <button className="border-blue-700 h-12 border bg-blue-700 hover:shadow-outline w-40 rounded-full mx-auto text-gray-100" onClick={submit(user, pass)}>
                Submit
            </button>
        </div>
    );
};

const Home = () => (
    <div>
        <H1>I will practice Hooks in this page.</H1>
        <Hooks />
        <Login />
    </div>
);

export default Home;
