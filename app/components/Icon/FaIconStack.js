import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resolveIcon } from '../../icons/resolveIcon';

const FaIconStack = ({
  backIcon,
  frontIcon,
  backClassName,
  frontClassName,
  size,
  className,
  fixedWidth,
  backTransform = 'grow-4',
  frontTransform = 'shrink-6',
  inverse: inverseProp,
}) => (
  <span
    className={classNames(
      'fa-layers',
      { 'fa-fw': fixedWidth },
      size && `fa-${size}`,
      className
    )}
  >
    <FontAwesomeIcon
      icon={resolveIcon(backIcon)}
      className={backClassName}
      transform={backTransform}
    />
    <FontAwesomeIcon
      icon={resolveIcon(frontIcon)}
      className={frontClassName}
      transform={frontTransform}
      inverse={
        inverseProp ??
        Boolean(
          frontClassName &&
          (frontClassName.includes('text-white') || frontClassName.includes('fa-inverse'))
        )
      }
    />
  </span>
);

FaIconStack.propTypes = {
  backIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
  frontIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired,
  backClassName: PropTypes.string,
  frontClassName: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  fixedWidth: PropTypes.bool,
  backTransform: PropTypes.string,
  frontTransform: PropTypes.string,
  inverse: PropTypes.bool,
};

export { FaIconStack };
