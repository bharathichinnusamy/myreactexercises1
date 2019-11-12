//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const animals = [
	{ label: "Horse" },
	{ label: "Turtle" },
	{ label: "Elephan" },
	{ label: "Monkey" }
];
const objaniamls = animals.map((item, index) => {
	return <li>{item.label}</li>;
});
var content = <ul>{objaniamls}</ul>;
ReactDOM.render(content, document.querySelector("#app"));
