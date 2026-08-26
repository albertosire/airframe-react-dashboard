import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './StarRating.scss';
import { FaIcon } from '../Icon';

export const StarRating = (props) => {
    const {
        className,
        max: maxStars,
        at: currentStars,
        starColor,
        onSelect,
        ...otherProps
    } = props;

    const starRatingClass = classNames(classes.starRating, className);

    const isInterctive = !!onSelect;
    const StartElement = isInterctive ? 'a' : 'span';

    return (
        <div className={ starRatingClass } {...otherProps}>
            {
                (() => {
                    const stars = [];

                    for(let i = 1; i <= maxStars; i++) {
                        const starProps = {
                            key: i,
                            onClick: () => isInterctive && onSelect(i)
                        };

                        if (isInterctive) {
                            starProps.href = '#';
                            starProps.onClick = (e) => {
                                e.preventDefault();
                                onSelect(i);
                            };
                        }

                        stars.push(
                            <StartElement { ...starProps } key={ i }>
                                <FaIcon
                                    icon={i <= currentStars ? 'star' : 'star-o'}
                                    fixedWidth
                                    className={i <= currentStars ? `text-${starColor}` : undefined}
                                />
                            </StartElement>
                        );
                    }

                    return stars;
                })()
            }
        </div>
    );
};

StarRating.propTypes = {
    className: PropTypes.string,
    max: PropTypes.number,
    at: PropTypes.number,
    starColor: PropTypes.string,
    onSelect: PropTypes.func
};

StarRating.defaultProps = {
    max: 5,
    at: 0,
    starColor: 'warning',
};
