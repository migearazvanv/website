import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import './theme/globalStyle';

class App extends Component {
  render() {
    return (
    	<div>
        <Navbar />
        <Footer />
		  </div>
    );
  }
}
export default App;
