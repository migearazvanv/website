import React, { Component } from 'react';
import '../App.css';
import { Container } from '../theme/grid';

export default class Projects extends Component {
	render() {
		return(
		<Container>
			<div className="projects">
				<div className="col-md-4 well">
				<h3>Collecting stars</h3>
				<a href="https://www.khanacademy.org/computer-programming/spin-off-of-project-memory/4816057546506240">Play</a>
				</div>
			</div>
		</Container>
		);
	}
}