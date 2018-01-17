import React, { Component } from 'react';
import './Jumbotron.css';
import { Container } from '../theme/grid';

class Jumbotron extends Component{
	rende() {
		return(
			<div className="jumbotron jumbotron-fluid">
				<Container>
					<h1 className="display-3">{this.props.title}</h1>
					<p className="lead">{this.props.subtitle}</p>
				</Container>
			</div>

		);
	}
}

export default Jumbotron;