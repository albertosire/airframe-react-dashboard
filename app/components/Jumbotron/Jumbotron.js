import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Jumbotron = ({ children, className, fluid, tag: Tag = 'div', ...props }) => (
    <Tag
        className={classNames(
            'p-5',
            'mb-4',
            'bg-light',
            'rounded-3',
            { 'container-fluid': fluid },
            className
        )}
        {...props}
    >
        {children}
    </Tag>
);

Jumbotron.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fluid: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export { Jumbotron };
