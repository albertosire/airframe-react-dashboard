import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { InputGroupText } from 'reactstrap';

const InputGroupAddon = ({ children, addonType, ...otherProps }) => {
    const childArr = React.Children.toArray(children);
    const isFa = _.some(childArr, (child) =>
        React.isValidElement(child) && child.props.className && _.includes(child.props.className, 'fa'));
    const isCheckRadio = _.some(childArr, (child) =>
        React.isValidElement(child) && (child.props.type === 'radio' || child.props.type === 'checkbox'));

    const child = isFa || isCheckRadio ? (
        <InputGroupText>
            { children }
        </InputGroupText>
    ) : children;

    return (
        <div className={addonType ? `input-group-${addonType}` : undefined} {...otherProps}>
            { child }
        </div>
    );
};

InputGroupAddon.propTypes = {
    children: PropTypes.node,
    addonType: PropTypes.oneOf(['prepend', 'append']),
};

export { InputGroupAddon };
