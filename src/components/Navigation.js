import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #006666; //This will change the background color of our navigation bar
}

.navbar-brand, .navbar-nav .nav-link{
    color: #ffffff; //This will change our text color on navigation bar

    &:hover {
        color: #00ffcc; //This will change the highlight color of Navigation bar
    }
}
`;

export const Navigation = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">United States Covid-19 information</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Symptoms">Symptoms</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/HowToProtectYourself">How To Protect Yourself</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Statistics">State Statistics</Nav.Link></Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)