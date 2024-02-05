
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import ListItems from "./component/todo.jsx"

const listItems=[
    {label: "Make the bed", done : false},
    {label: "Wash my hands", done : false},
    {label: "Eat", done : false},
    {label: "Go to the gym", done : false},
    {label: "Run", done : true}];

//render your react application
ReactDOM.render(<ListItems  listItems={listItems} />, document.querySelector("#app"));
