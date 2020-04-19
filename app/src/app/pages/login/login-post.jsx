import React from "react";

class PostAuth extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="flex flex-col bg-gray-200 p-10 w-1/3 mx-auto"
            >
                <input
                    className="flex-1 border rounded mb-5 ml-5 mr-5 p-2"
                    name="username"
                    type="text"
                />
                <input
                    className="flex-1 border rounded mb-5 ml-5 mr-5 p-2"
                    name="password"
                    type="password"
                />
                <input
                    type="submit"
                    label="Submit"
                    className="border-blue-700 h-12 border bg-blue-700 hover:shadow-outline w-40 rounded-full mx-auto text-gray-100"
                />
            </form>
        );
    }
}

export default PostAuth;
