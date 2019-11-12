//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Parent = props => {
	return (
		<div>
			<p>{props.name}</p>
			<Child life={props.look} />
		</div>
	);
};
const Child = props => {
	return <h1>{props.life}</h1>;
};

ReactDOM.render(
	<Parent name="bharathi" look="great" />,
	document.querySelector("#app")
);
Parent.propTypes = {
	name: PropTypes.string,
	look: PropTypes.string
};
Child.propTypes = {
	life: PropTypes.string
};
