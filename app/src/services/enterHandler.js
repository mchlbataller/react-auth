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
            setRequest(JSON.stringify(res));
        });
};

export default function enterHandler(event, ...params) {
    event.key === "Enter" && submit(...params);
}
