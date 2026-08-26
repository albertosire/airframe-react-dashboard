import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Avatar } from './Avatar';

import avatarColors from './../../colors.scss';

const AvatarFont = ({
    children,
    bgColor = '400',
    fgColor = 'white',
    bgColorCustom,
    fgColorCustom,
    size = 'md',
    ...avatarProps
}) => {
    const parentClass = classNames(
        'avatar-font',
        `avatar-font--${size}`,
        bgColor && avatarColors[`bg-color--${ bgColor }`]
    );
    const childClass = classNames('avatar-font__text',
        fgColor && avatarColors[`fg-color--${ fgColor }`]
    );
    const parentCustomStyle = bgColorCustom ? {
        backgroundColor: bgColorCustom
    } : { };
    const childCustomStyle = fgColorCustom ? {
        color: fgColorCustom
    } : { };
    const child = (
        <span>
            { children }
        </span>
    );

    return (
        <Avatar size={size} { ...avatarProps }>
            <div className={ parentClass } style={parentCustomStyle}>
            {
                React.cloneElement(child, {
                    style: childCustomStyle,
                    className: classNames(child.props.className, childClass)
                })
            }
            </div>
        </Avatar>
    );
};
AvatarFont.propTypes = {
    children: PropTypes.node,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    bgColorCustom: PropTypes.string,
    fgColorCustom: PropTypes.string,
    ...Avatar.propTypes
};

export { AvatarFont };