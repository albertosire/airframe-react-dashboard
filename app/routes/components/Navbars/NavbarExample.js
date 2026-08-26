import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Avatar,
    AvatarAddOn,
    Button,
    DropdownToggle,
    NavbarThemeProvider,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    UncontrolledCollapse,
    UncontrolledDropdown,
} from './../../../components';

import { NavbarActivityFeed } from './../../../layout/components/NavbarActivityFeed';
import { NavbarMessages } from './../../../layout/components/NavbarMessages';
import { NavbarUser } from './../../../layout/components/NavbarUser';
import { NavbarNavigation } from './NavbarNavigation';
import { DropdownProfile } from './../Dropdowns/DropdownProfile';

import { randomAvatar } from './../../../utilities';
import { FaIcon } from '../../../components/Icon';

const NavbarExample = ({ themeColor, themeStyle, navStyle }) => {
    return (
        <NavbarThemeProvider style={ themeStyle } color={ themeColor } className="shadow-sm">
            <Navbar expand="lg" themed>
                <Link to="/">
                    <NavbarBrand className="mb-0" tag="div">
                        react.bs4
                    </NavbarBrand>
                </Link>

                <Nav pills>
                    <NavItem>
                        <NavLink tag={ NavbarToggler } id="navbar-navigation-toggler" className="b-0">
                            <FaIcon icon="bars" fixedWidth />
                        </NavLink>
                    </NavItem>
                </Nav>

                { /* Navigation with Collapse */ }
                <UncontrolledCollapse navbar toggler="#navbar-navigation-toggler">
                    <NavbarNavigation
                        pills={ navStyle === 'pills' }
                        accent={ navStyle === 'accent' }
                    />
                </UncontrolledCollapse>

                { /* END Navbar: Left Side */ }
                { /* START Navbar: Right Side */ }
                <Nav className="ms-auto" pills>
                    <NavbarMessages />
                    <NavbarActivityFeed />
                    { /* START Navbar: Dropdown */ }
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <Avatar.Image
                                size="sm"
                                src={ randomAvatar() }
                                addOns={[
                                    <AvatarAddOn.Icon 
                                        icon="circle"
                                        color="white"
                                        key="avatar-icon-bg"
                                    />,
                                    <AvatarAddOn.Icon 
                                        icon="circle"
                                        color="danger"
                                        key="avatar-icon-fg"
                                    />
                                ]}
                            /> 
                        </DropdownToggle>
                        <DropdownProfile  
                            right  
                        />
                    </UncontrolledDropdown>
                    { /* END Navbar: Dropdown */ }
                    <NavbarUser className="d-none d-lg-block" />
                </Nav>
                { /* END Navbar: Right Side */ }
            </Navbar>

            <Navbar light expand="lg" className="py-3 bg-white">
                <h1 className="mb-0 h4">
                    Navbar Only
                </h1>
                
                <Button color={ themeColor } className="px-4 my-sm-0">
                    Download <FaIcon icon="download" fixedWidth className="ms-1" />
                </Button>
            </Navbar>
        </NavbarThemeProvider>
    );
}

NavbarExample.propTypes = {
    navStyle: PropTypes.oneOf(['pills', 'accent', 'default']),
    themeStyle: PropTypes.string,
    themeColor: PropTypes.string,
};
NavbarExample.defaultProps = {
    navStyle: 'default',
    themeStyle: 'dark',
    themeColor: 'primary'
};

export { NavbarExample };
