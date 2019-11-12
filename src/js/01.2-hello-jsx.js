//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
var name = "James";
var age = 12;
var output = (
	<p>
		{name} is {age} years old
	</p>
);
ReactDOM.render(output, document.querySelector("#app"));
