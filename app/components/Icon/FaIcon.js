import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resolveIcon, parseFaClassName } from '../../icons/resolveIcon';

const SIZE_AS_ICON = /^(lg|sm|xs|[1-9]x|10x|fw)$/;

function iconNameFromClassName(className) {
  if (!className) {
    return null;
  }

  return className.split(/\s+/).reduce((found, token) => {
    if (found || !token.startsWith('fa-')) {
      return found;
    }
    if (
      token === 'fa-fw' ||
      token === 'fa-lg' ||
      token === 'fa-sm' ||
      token === 'fa-spin' ||
      token.startsWith('fa-stack') ||
      /^fa-[0-9]+x$/.test(token)
    ) {
      return found;
    }
    return token.slice(3);
  }, null);
}

const FaIcon = ({
  icon,
  className,
  fixedWidth,
  size,
  spin,
  style,
  ...props
}) => {
  let iconName = icon;
  let iconSize = size;
  let iconFixedWidth = fixedWidth;

  if (typeof icon === 'string' && SIZE_AS_ICON.test(icon)) {
    iconFixedWidth = icon === 'fw' ? true : iconFixedWidth;
    iconSize = icon === 'fw' ? iconSize : iconSize || icon;
    iconName = iconNameFromClassName(className) || icon;
  }

  const iconDef = resolveIcon(iconName);

  return (
    <FontAwesomeIcon
      icon={iconDef}
      className={classNames('fa', className)}
      fixedWidth={iconFixedWidth}
      size={iconSize}
      spin={spin}
      style={style}
      {...props}
    />
  );
};

FaIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  className: PropTypes.string,
  fixedWidth: PropTypes.bool,
  size: PropTypes.string,
  spin: PropTypes.bool,
  style: PropTypes.object,
};

const FaIconFromClass = ({ className, ...props }) => {
  const parsed = parseFaClassName(className);

  if (!parsed) {
    return null;
  }

  return (
    <FaIcon
      icon={parsed.icon}
      fixedWidth={parsed.fixedWidth}
      size={parsed.size}
      className={parsed.className}
      {...props}
    />
  );
};

FaIconFromClass.propTypes = {
  className: PropTypes.string,
};

export { FaIcon, FaIconFromClass };
