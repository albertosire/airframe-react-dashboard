import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem
} from './../../components';

import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';

export const HubNavbar = () => (
    <Navbar light expand="xs" fluid>
        <Nav navbar>
            <NavItem className="navbar-brand d-flex align-items-center">
                <Link to="/" className="d-flex align-items-center">
                    <LogoThemed />
                </Link>
            </NavItem>
            <NavItem className="d-none d-md-block ms-3">
                <span className="navbar-text fw-semibold">
                    Propostas de Dashboard
                </span>
            </NavItem>
        </Nav>
    </Navbar>
);
