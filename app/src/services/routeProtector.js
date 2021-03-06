import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const RouteProtector = (props) => {
    const [verified, reAuth] = useState(false);
    let url =
        (process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_PROD_API
            : process.env.REACT_APP_DEV_API) + "reauth";

    axios
        .post(url, {
            token: sessionStorage.getItem("jwt"),
        })
        .then((res) => {
            reAuth(res.data.reauth);
        });

    return (
        <>
            {verified ? (
                props.children
            ) : (
                <p>
                    Failed to reauth for current session, server returned{" "}
                    {verified}
                </p>
            )}
        </>
    );
};

export default RouteProtector;
