import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';
import { FaIcon } from '../../components/Icon';

export const DefaultNavbar = () => (
    <Navbar light expand="xs" fluid>
        <Nav navbar>
            <NavItem className="me-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand d-lg-none">
                <Link to="/">
                    <LogoThemed />
                </Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <span className="navbar-text">
                    <Link to="/">
                        <FaIcon icon="home" />
                    </Link>
                </span>
                <span className="navbar-text px-2">
                    <FaIcon icon="angle-right" />
                </span>
                <span className="navbar-text">
                    <Link to="/">Start</Link>
                </span>
                <span className="navbar-text px-2">
                    <FaIcon icon="angle-right" />
                </span>
                <span className="navbar-text">
                    Page Link
                </span>
            </NavItem>
        </Nav>
        <Nav navbar className="ms-auto">
            <NavbarActivityFeed />
            <NavbarMessages className="ms-2" />
            <NavbarUser className="ms-2" />
        </Nav>
    </Navbar>
);
