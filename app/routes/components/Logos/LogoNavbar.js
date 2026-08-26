import React from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from '../../../components/Icon';

const LogoNavbar = (props) => (
<React.Fragment>
    { /* START Logo: Visible on: md, lg, xl */}
    <FaIcon icon={ props.logo } fixedWidth className="fa-lg d-none d-lg-block" />
    { /* END Logo: Visible on: md, lg, xl */}
    { /* START Logo: Visible on: xs, sm */}
    <FaIcon icon={ props.logo } fixedWidth className="d-lg-none" />
    { /* END Logo: Visible on: xs, sm */}
</React.Fragment>
)

LogoNavbar.propTypes = {
    logo: PropTypes.node
};
LogoNavbar.defaultProps = {
    logo: "send"
};

export { LogoNavbar };
