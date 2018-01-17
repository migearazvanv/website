import React, { Component } from 'react';
import '../App.css';
import { Container } from '../theme/grid';

export default class Contact extends Component {
	render() {
		return(
		<Container>
			<div className="contact">
				<h4>Github: <a href="https://github.com/migearazvanv">Răzvan Migea</a></h4>
				<h4>LinkedIn: <a href="https://www.linkedin.com/in/razvan-migea-31a29b152/">Răzvan Migea</a></h4>
			</div>
		</Container>
		)
	}
}