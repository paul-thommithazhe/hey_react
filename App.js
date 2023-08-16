import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "Hi I am h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
