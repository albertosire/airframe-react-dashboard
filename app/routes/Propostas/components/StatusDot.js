import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './../Propostas.scss';

const STATUS_COLOR = {
    ok: 'success',
    alerta: 'warning',
    risco: 'danger'
};

export const StatusDot = ({ status, label, detail }) => (
    <div className={classes.statusItem}>
        <span
            className={classNames(
                classes.statusDot,
                `bg-${STATUS_COLOR[status] || 'secondary'}`
            )}
        />
        <div>
            <div className="fw-semibold">{label}</div>
            <div className="small text-muted">{detail}</div>
        </div>
    </div>
);

StatusDot.propTypes = {
    status: PropTypes.oneOf(['ok', 'alerta', 'risco']).isRequired,
    label: PropTypes.string.isRequired,
    detail: PropTypes.string
};
