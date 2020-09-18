import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../Assets/logo.png'


const NavbarComponent=()=>{
        const navItems=['Work','About','Contact'];
        const nav=navItems.map((i,index)=> <Nav.Item key={index}><Nav.Link className='nav-link font-weight-bold custom-nav-link'>{i}/&gt;</Nav.Link> </Nav.Item>);
        return(
            <Navbar fixed ='top' collapseOnSelect expand="sm" variant="dark">
            <Navbar.Brand href="#home"><img className='navbar-logo' src={logo} alt='logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='ml-auto text-center' activeKey="#home">
              <Nav.Item><Nav.Link className='nav-link font-weight-bold custom-nav-link active' href='#home'>Start/&gt;</Nav.Link> </Nav.Item>
              {nav}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
}

export default NavbarComponent;