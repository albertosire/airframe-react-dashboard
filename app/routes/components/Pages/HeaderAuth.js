import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LogoThemed } from './../LogoThemed/LogoThemed';
import { FaIcon } from '../../../components/Icon';

const HeaderAuth = (props) => (
    <div className="mb-4">
        <div className="mb-4 text-center">
            <Link to="/" className="d-inline-block">
                {
                    props.icon ? (
                        <FaIcon icon={props.icon} size="3x" className={props.iconClassName} />
                    ) : (
                        <LogoThemed checkBackground height="30" />
                    )
                }
            </Link>
        </div>
        <h5 className="text-center mb-4">
            { props.title }
        </h5>
        <p className="text-center">
            { props.text }
        </p>
    </div>
)
HeaderAuth.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    title: PropTypes.node,
    text: PropTypes.node,
};
HeaderAuth.defaultProps = {
    title: "Waiting for Data...",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptas aperiam odit, reiciendis dicta nihil.",
    iconClassName: "text-theme"
};

export { HeaderAuth };
