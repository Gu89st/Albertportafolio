import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo3 from "../Imagenes/Logo2.png";
import Connection from "./Connection";

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false); 
    const handleToggle = () => {
        setExpanded(!expanded); 
    };
    const handleLinkClick = () => {
        setExpanded(false); 
    };
    return (
        <Navbar className="navbar" expand="lg" fixed="top" expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/Inicio">
                    <img src={Logo3} alt="Logo3" width={100} height={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav me-auto custom-navbar" variant="underline">
                        {Connection.map((link, index) => (
                            <Nav.Link className="nav-link"
                                key={index} as={Link}
                                to={link.path} onClick={handleLinkClick}>
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;