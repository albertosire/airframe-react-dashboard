import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaIcon } from '../Icon';

export const WizardStep = props => {
    const stepClass = classNames({
        'wizard-step--active': props.active,
        'wizard-step--complete': props.complete,
        'wizard-step--disabled': props.disabled
    }, 'wizard-step', props.className);

    return (
        <a href="#" className={stepClass} onClick={(e) => { e.preventDefault(); !props.disabled && props.onClick(); }}>
            <div className='wizard-step__icon'>
                { !props.complete ? props.icon : props.successIcon }
            </div>
            <div className='wizard-step__content'>
                { props.children }
            </div>
        </a>
    )
};

WizardStep.defaultProps = {
    successIcon: (<FaIcon icon="check" fixedWidth />),
    onClick: () => {}
}

WizardStep.propTypes = {
    active: PropTypes.bool,
    complete: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string.required,
    onClick: PropTypes.func.required,
    icon: PropTypes.node,
    successIcon: PropTypes.node,
    children: PropTypes.node
}
