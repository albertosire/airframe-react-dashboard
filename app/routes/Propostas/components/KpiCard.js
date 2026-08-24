import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    Card,
    CardBody
} from './../../../components';

import { Sparkline } from './Sparkline';
import classes from './../Propostas.scss';

export const KpiCard = ({ label, value, unit, delta, positive, spark }) => (
    <Card className={classes.kpiCard}>
        <CardBody>
            <div className="small text-uppercase text-muted fw-semibold mb-1">
                {label}
            </div>
            <div className="d-flex align-items-baseline">
                <span className={classes.kpiValue}>{value}</span>
                {unit && <span className="ms-2 text-muted">{unit}</span>}
            </div>
            {delta && (
                <div className={classNames('small mt-1', positive ? 'text-success' : 'text-danger')}>
                    <i className={`fa fa-fw ${positive ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
                    {delta}
                </div>
            )}
            {spark && (
                <div className="mt-2">
                    <Sparkline data={spark} color={positive ? 'success' : 'danger'} />
                </div>
            )}
        </CardBody>
    </Card>
);

KpiCard.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    unit: PropTypes.string,
    delta: PropTypes.string,
    positive: PropTypes.bool,
    spark: PropTypes.arrayOf(PropTypes.number)
};
