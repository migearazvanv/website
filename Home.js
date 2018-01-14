import React, { Component } from 'react'
import '../App.css'
import {Container} from '../theme/grid';
//import styled from 'styled-components';
import { 
	Image,
	//RevealP
} from './Home.style';

export default class Home extends Component {
	render() {
		return(
			<Container>
				<h3>Despre mine</h3>
					<Image src={require('../Home/cap.jpg')} alt="cap"/>
					<p className="about">
					
						Primul contact pe care l-am avut cu programarea 
						a fost în clasa a IX-a, fiind la profil mate-info.
						De atunci a inceput și pasiunea mea față de 
						programare pentru că implica multă gândire și
						puține chestii de învățat.
						<p>Am vrut să urmez facultatea de Automatică și
						Calculatoare, însă nu am fost admis și
						am intrat la ETTI. În prima sesiune
						,când am fost nevoit să chiar învăț, mi-am dat seama 
						că această facultate nu este potrivită pentru mine.
						</p>
						<p>Am început să învăț Java și am reușit să mă 
						familiarizez cu programarea orientată pe obiect.
						În vară am urmat un internship la Academy+Plus
						în care mi-am îmbunătățit cunoștiințele în C/C++
						și am învățat Linux și Git. Apoi am învățat pe 
						Khan Academy: SQL, HTML/CSS și JavaScript. Mi-a plăcut
						foarte mult JavaScript pentru că are o sintaxă modernă,
						urmând să fac un joc prin intermediul bibliotecii 
						ProcessingJS.
						</p>
						<p>Am început să fac un portofolio website
						cu jQuery, însă am abandonat și acum lucrez la el
						cu ReactJS. În viitor vreau să mai lucrez la design
						și să conectez o bază de date, prin intermediul
						căreia să primesc feedback-uri de la cei care îl
						accesează, iar apoi să îl hostez.</p>
					</p>
			</Container>	
		);
	}
}