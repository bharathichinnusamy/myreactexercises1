//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const navlinkItems = [
	<li className="nav-item" key="1">
		<a className="nav-link" href="#">
			Link to google.com
		</a>
	</li>,
	<li className="nav-item" key="2">
		<a className="nav-link" href="#">
			Link to facebook.com
		</a>
	</li>,
	<li className="nav-item" key="3">
		<a className="nav-link" href="#">
			Link to amazon.com
		</a>
	</li>
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#app"));
