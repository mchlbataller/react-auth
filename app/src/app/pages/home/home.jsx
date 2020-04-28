import React, {useState} from "react";
import { H1 } from "app/components/text";

function Hooks(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

const Home = () => (
    <div>
        <H1>I will practice Hooks in this page.</H1>
        <Hooks />
    </div>
);

export default Home;
