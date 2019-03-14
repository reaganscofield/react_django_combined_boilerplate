import React from "react";
import ReactDOM from "react-dom";
// import DataProvider from "./DataProvider";
// import Table from "./Table";


const App = () => (
    <div>
        <h1>HELLO WORLD</h1>
    </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;