import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaIcon } from '../../components/Icon';
import {
    NavItem,
    NavLink
} from './../../components';

const NavbarUser = (props) => (
    <NavItem { ...props }>
        <NavLink tag={ Link } to="/dashboards/projects">
            <FaIcon icon="home" />
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
