import axios from "axios";

export const submit = (user, pass, setRequest) => {
    // URL config
    const url = process.env.REACT_APP_DEV_API + "auth";

    axios
        .post(url, {
            username: user,
            password: pass,
        })
        .then((res) => {
            res = res.data;
            setRequest({ verified: true });
            // After receiving the data
            // we will move the token to the sessionStorage for future use
            sessionStorage.setItem("jwt", res.token);
            // Set the login state as true for redirection
        })
        .catch(function (err) {
            setRequest({ verified: false, error: "Login failed for " + user });
        });
};

export default function enterHandler(event, ...params) {
    event.key === "Enter" && submit(...params);
}
