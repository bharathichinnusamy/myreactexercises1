//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const animals = ["Horse", "Turtle", "Elephan", "Monkey"];
const fouranimals = animals.map((item, index) => {
	return <li>{item}</li>;
});

var content = <ul>{fouranimals}</ul>;
ReactDOM.render(content, document.querySelector("#app"));
