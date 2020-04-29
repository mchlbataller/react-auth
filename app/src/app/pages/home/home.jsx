import React, { useState } from "react";
import axios from "axios";
import { H1 } from "app/components/text";


const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [response, setResponse] = useState("");

    return (
        <div className="bg-gray-300 border border-gray-100 flex mx-auto w-1/3 flex flex-col p-5">
            <p>{response}</p>
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

            <button
                className="border-blue-700 h-12 border bg-blue-700 hover:shadow-outline w-40 rounded-full mx-auto text-gray-100"
                onClick={() => submit(user, pass, setResponse)}
            >
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
