//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const data = {
	image:
		"https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};
var output = (
	<div classNameName="card m-5">
		<img className="card-img-top" src={data.image} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a href={data.button.url} className="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>
);

ReactDOM.render(output, document.querySelector("#app"));
