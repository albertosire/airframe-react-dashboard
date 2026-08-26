import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Consumer } from './context';
import { FaIcon } from '../Icon';

export const AccordionIndicator = ({
    open = <FaIcon icon="minus" fixedWidth />,
    closed = <FaIcon icon="plus" fixedWidth />,
    className,
}) => (
    <Consumer>
    {
        ({ isOpen }) => isOpen ?
            React.cloneElement(open, {
                className: classNames(className, open.props.className)
            }) : React.cloneElement(closed, {
                className: classNames(className, closed.props.className)
            })
    }
    </Consumer>
);
AccordionIndicator.propTypes = {
    open: PropTypes.node,
    closed: PropTypes.node,
    className: PropTypes.string
};
