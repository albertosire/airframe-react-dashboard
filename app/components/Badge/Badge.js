import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge as BsBadge } from 'reactstrap';

const Badge = ({
  color = 'secondary',
  className,
  pill = false,
  ...otherProps
}) => (
  <BsBadge
    color={color}
    pill={pill}
    className={classNames(className, color && `badge-${color}`)}
    {...otherProps}
  />
);

Badge.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  pill: PropTypes.bool,
  children: PropTypes.node,
};

export { Badge };
