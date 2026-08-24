import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { CorporateNotifications } from './CorporateNotifications';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';
import {
    EXAMPLE_META,
    getCurrentSection,
    getExampleSlug
} from './../../data/corporateNav';

export const CorporateNavbar = () => {
    const { pathname } = useLocation();
    const slug = getExampleSlug(pathname);
    const example = EXAMPLE_META[slug];
    const section = getCurrentSection(pathname);

    return (
        <Navbar light expand="xs" fluid>
            <Nav navbar>
                <NavItem className="me-3">
                    <SidebarTrigger />
                </NavItem>
                <NavItem className="navbar-brand d-lg-none">
                    <Link to="/">
                        <LogoThemed />
                    </Link>
                </NavItem>
                <NavItem className="d-none d-md-block">
                    <span className="navbar-text">
                        <Link to="/">Propostas</Link>
                    </span>
                    <span className="navbar-text px-2">
                        <i className="fa fa-angle-right"></i>
                    </span>
                    <span className="navbar-text">
                        <Link to={`/${slug}`}>{example.label}</Link>
                    </span>
                    <span className="navbar-text px-2">
                        <i className="fa fa-angle-right"></i>
                    </span>
                    <span className="navbar-text">
                        {section.title}
                    </span>
                </NavItem>
            </Nav>
            <Nav navbar className="ms-auto">
                <CorporateNotifications />
            </Nav>
        </Navbar>
    );
};
