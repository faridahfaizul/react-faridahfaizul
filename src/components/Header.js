import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {

    return (
    <div className="header">
        <Navbar expand="lg" >           
            <a className="logo" href="">faridah faizul</a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="menu" id="basic-navbar-nav">
                <Nav className="menu-link">
                    <Nav.Link href="/" className="current menu-link">home</Nav.Link>
                    <Nav.Link href="about" className="menu-link">about</Nav.Link>
                    <Nav.Link href="works" className="menu-link">works</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}