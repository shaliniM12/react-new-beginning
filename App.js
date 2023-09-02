import React from "react";
import ReactDom from "react-dom";

import Body from "./src/components/Body";
import Header from "./src/components/Header";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
