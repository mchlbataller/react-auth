import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);
    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        setEmail("");
        setPassword("");
        setDisplayName("");
    };
    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };
    return (
        <div className="mt-8">
            <h1 className="text-3xl mb-2 text-center font-light">Sign Up</h1>
            <div className="border border-blue-100 mx-auto w-11/12 md:w-4/12 rounded-lg py-8 px-4 md:px-8 shadow-xl">
                {error !== null && (
                    <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                        {error}
                    </div>
                )}
                <form className="">
                    <label htmlFor="displayName" className="block text-center">
                        Username
                    </label>
                    <input
                        type="text"
                        className="my-1 p-2 pl-3 mb-3 w-full bg-gray-100 border border-gray-300 rounded-lg"
                        name="displayName"
                        value={displayName}
                        placeholder="Username"
                        id="displayName"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block text-center">
                        Email
                    </label>
                    <input
                        type="email"
                        className="my-1 p-2 mb-3 pl-3 w-full bg-gray-100 border border-gray-300 rounded-lg"
                        name="userEmail"
                        value={email}
                        placeholder="Email"
                        id="userEmail"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block text-center">
                        Password
                    </label>
                    <input
                        type="password"
                        className="my-1 mb-10 p-2 pl-3 w-full bg-gray-100 border border-gray-300 rounded-lg"
                        name="userPassword"
                        value={password}
                        placeholder="Password"
                        id="userPassword"
                        onChange={(event) => onChangeHandler(event)}
                    />
                    <button
                        className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                        onClick={(event) => {
                            createUserWithEmailAndPasswordHandler(
                                event,
                                email,
                                password
                            );
                        }}
                    >
                        Sign up
                    </button>
                </form>
                <p className="text-center my-3">or</p>
                <button className="border border-blue-400 hover:bg-red-600 text-gray-900 hover:text-gray-100 w-full py-2 text-white rounded-lg">
                    Sign Up with Google
                </button>
                <p className="text-center my-3">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-500 hover:text-blue-600">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
