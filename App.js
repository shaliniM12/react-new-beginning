import React from "react"; // importing React from node modules
import ReactDOM from "react-dom/client"; // importing React from node modules
/*
<div id='parent'>
    <div id='child'>
        <h1></h1>
        <h2></h1>
    </div>
    <div id='child'>
        <h1></h1>
        <h2></h1>
    </div>
</div>
 */

//using React.createElement creating elements starts
// * React.createElement => ReactElement - JS Object {} => HTML Element
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hello! How are you?"),
        React.createElement("h2", {}, "I'm heading 2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello! I'm good! Thank you :)"),
        React.createElement("h2", {}, "Nice to meet you heading 2"),
    ]),
]);

const reactHeading = React.createElement(
    "h1",
    { id: "heading", className: "heading" }, //props
    "Hello world from React!!!!" //props
);
// * React createElement ends *****

// React Element
const heading = (
    <h1 className="heading" tabIndex="2">
        Hello, I'm JSX inside your React application
    </h1>
);

const Title = () => (
    <h1 className="heading" tabIndex="2">
        Hello, I'm JSX inside your React application
    </h1>
);

const HeadingComponent = () => {
    return (
        <div className="container">
            <Title />
            <h1>Hello, I'm heading Component</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
