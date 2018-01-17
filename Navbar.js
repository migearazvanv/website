import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Container } from '../theme/grid';

class Navbar extends Component{
  render() {
    return (
      <Container>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link className="navbar-brand " to={"/"}>Răzvan Migea</Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item active col-md-6">
              <Link className="nav-link col-md-5" to={"/projects"}>Project <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active col-md-12">
              <Link className="nav-link" to={"/contact"}>Contact<span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
            
      </nav>
      </Container>
    
    );
  }
}
export default Navbar;