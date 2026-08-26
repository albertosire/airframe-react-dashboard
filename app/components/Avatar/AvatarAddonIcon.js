import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import avatarColors from './../../colors.scss';
import { FaIcon } from '../Icon';
import { parseFaClassName } from '../../icons/resolveIcon';

const AvatarAddonIcon = ({
    small,
    icon,
    className,
    color = 'success',
}) => {
    const addOnClass = classNames({
        'avatar__icon__inner': small
    }, avatarColors[`fg-color--${ color }`]);

    const resolvedIcon = icon || parseFaClassName(className)?.icon;

    return (
        <FaIcon
            icon={resolvedIcon || 'circle'}
            className={classNames(addOnClass, className && !icon ? parseFaClassName(className)?.className : undefined)}
        />
    );
};
AvatarAddonIcon.propTypes = {
    small: PropTypes.bool,
    icon: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string
};
AvatarAddonIcon.addOnId = "avatar--icon";

export { AvatarAddonIcon };
