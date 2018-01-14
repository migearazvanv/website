import React, { Component } from 'react';
import '../App.css';
import {
  Link
} from 'react-router-dom';
import { 
	ToolbarImage
} from '../Home/Home.style';
import { Button } from '../theme/Header.style';
export default class Header extends Component {
	render() {
		return(
			<div className="page-header">
				<h1>Răzvan Migea <small> Portofolio </small></h1>
				<ToolbarImage>
					<Button primary><Link to="/" className="col-md-4">Home</Link></Button>
					<Button primary><Link to="/projects" className="col-md-4">Project</Link></Button>
					<Button primary><Link to="/contact" className="col-md-4">Contact</Link></Button>
				</ToolbarImage>
			</div>
		)
	}
}