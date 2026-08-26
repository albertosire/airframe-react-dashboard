import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CustomInput = ({
    type = 'checkbox',
    id,
    label,
    inline,
    className,
    children,
    ...props
}) => {
    const inputClass = classNames(className, {
        'custom-control-empty': !label,
    });

    if (type === 'select') {
        return (
            <select className={classNames('form-select', inputClass)} id={id} {...props}>
                {children}
            </select>
        );
    }

    if (type === 'file') {
        return (
            <div className={classNames('form-file', inputClass)}>
                <input className="form-control" type="file" id={id} {...props} />
                {label ? <label className="form-file-label" htmlFor={id}>{label}</label> : null}
            </div>
        );
    }

    const inputType = type === 'switch' ? 'checkbox' : type;
    const wrapperClass = classNames('form-check', {
        'form-check-inline': inline,
        'form-switch': type === 'switch',
    }, inputClass);

    return (
        <div className={wrapperClass}>
            <input className="form-check-input" type={inputType} id={id} {...props} />
            {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
        </div>
    );
};

CustomInput.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.node,
    inline: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export { CustomInput };
