import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    Collapse,
    NavItem,
    NavbarToggler,
    NavbarBrand,
    Container,
} from "reactstrap";
import './NavSection.css'

const NavSection = () => {
    const [collapsed, setCollapsed] = useState(true);


    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Container>
            <Navbar className="text-dark navfont" light expand="md">
                <NavbarBrand className="" href="/">
                    Download Youtube Thumbnail
        </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 bg-info" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav
                        style={{ fontSize: "1.3rem" }}
                        className="ml-auto justify-content-around  align-items-center"
                        navbar
                    >
                        <NavItem>
                            <NavLink className="text-muted mr-4" to="/tags">
                                Find youtube video tags
              </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className="text-muted mx-3"
                                to="/posts"
                            >
                                Posts
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className=" ml-3 text-muted"
                                to="/policy"
                            >
                                Privacy policy
              </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default NavSection;