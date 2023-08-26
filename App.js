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

console.log(reactHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
