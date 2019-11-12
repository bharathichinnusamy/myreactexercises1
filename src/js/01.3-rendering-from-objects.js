//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
var obj = {
	firstname: "Karthik",
	lastname: "Nadesan"
};
const output = (
	<div>
		<h1>My name is {obj.firstname}</h1>
		<h2>My last name is {obj.lastname}</h2>
	</div>
);

ReactDOM.render(output, document.querySelector("#app"));
