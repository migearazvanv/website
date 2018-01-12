import React, { Component } from 'react';
import '../App.css';
import {
  Link
} from 'react-router-dom';
import { 
	Image,
	VavaImage,
	ToolbarImage
} from '../Home/Home.style';
export default class Header extends Component {
	render() {
		return(
			<div className="page-header">
				<h1>Răzvan Migea <small> Portofolio </small></h1>
				<ToolbarImage>
				<Link to="/" className="col-md-4">Home</Link>
				<Link to="/projects" className="col-md-4">Projects</Link>
				<Link to="/contact" className="col-md-4">Contact Me!</Link>
			</ToolbarImage>
			</div>
		)
	}
}