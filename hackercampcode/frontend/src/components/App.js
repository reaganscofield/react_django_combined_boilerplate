import React from "react";
import ReactDOM from "react-dom";
import Entry from './Entry';

const App = () => (
    <Entry />
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;

