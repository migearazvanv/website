import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
	render() {
		return (
			<footer className="footer text-center">
		        <span className="text-muted">Migea Răzvan ©{new Date().getFullYear()}</span>
		    </footer>
		);
	}
}
export default Footer;