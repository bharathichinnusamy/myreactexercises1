//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const Temp = props => {
	console.log(props);

	return props.style.map(function(item, index) {
		return <p key={index}>{item}</p>;
	});
};
var arr = ["a", "b", "c"];

ReactDOM.render(<Temp style={arr} />, document.querySelector("#app"));
Temp.propTypes = {
	style: PropTypes.array
};
