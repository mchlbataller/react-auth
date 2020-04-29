import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { H1 } from "app/components/text";
import enterHandler, { submit } from "services/enterHandler";

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [response, setResponse] = useState({});

    return (
        <div className="bg-gray-300 border border-gray-100 flex mx-auto w-1/3 flex flex-col p-5">
            {/* If the response has a value, return the response. */}
            {response.verified === true ? (
                <Redirect to="/login/success" />
            ) : (
                response.verified === false && (
                    <p className="text-center bg-red-900 text-white p-5">
                        {response.error}
                    </p>
                )
            )}

            <p className="flex-1 mx-auto p-5 font-light text-2xl">Login</p>
            <input
                type="text"
                className="flex-1 p-2  my-2 mx-5 bg-gray-100 border rounded-sm border"
                onChange={(e) => {
                    setUser(e.target.value);
                }}
                onKeyPress={(e) => enterHandler(e, user, pass, setResponse)}
            />
            <input
                type="password"
                className="flex-1 p-2 my-2 mx-5 bg-gray-100 border rounded-sm border"
                onChange={(e) => {
                    setPass(e.target.value);
                }}
                onKeyPress={(e) => enterHandler(e, user, pass, setResponse)}
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

export default Login;
