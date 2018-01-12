import React, { Component } from 'react'
import '../App.css'
import {Container} from '../theme/grid';
import styled from 'styled-components';
import { 
	Image,
	//VavaImage
} from './Home.style';

export default class Home extends Component {
	render() {
		return(
			<Container>	
				<h3>About me</h3>
				<p>despre mine asodasibdasdo adasid asihd as dg as gadsg diuasiu das das dagsuid asuid asu dasdasdgas</p>
			<Image src={require('../Home/vava-munte.jpg')} alt="VavaImage"/>	
			</Container>	

		)
	}
}