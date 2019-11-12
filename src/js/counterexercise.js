//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Card from "./component/Card.jsx";
var count = 0;
ReactDOM.render(
	<Card imageUrl="http://via.placeholder.com/350x150" title={count} />,
	document.querySelector("#app")
);

setInterval(() => {
	count = count + 1;
	console.log(count);
	ReactDOM.render(
		<Card imageUrl="http://via.placeholder.com/350x150" title={count} />,
		document.querySelector("#app")
	);
}, 1000);
