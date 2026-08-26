import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import { Avatar } from './Avatar';
import { AvatarFont } from './AvatarFont';
import { FaIcon } from '../Icon';

class AvatarImage extends React.PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
        placeholder: PropTypes.node,
        alt: PropTypes.string,
        className: PropTypes.string,
        ..._.omit(Avatar.propTypes, ['children'])
    };

    static defaultProps = {
        placeholder: <FaIcon icon="user" fixedWidth />
    }

    imgRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            imgLoaded: false
        };
    }

    componentDidMount() {
        this.syncLoadedFromElement();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src) {
            this.setState({ imgLoaded: false }, this.syncLoadedFromElement);
        }
    }

    syncLoadedFromElement = () => {
        const img = this.imgRef.current;
        if (img && img.complete && img.naturalWidth > 0) {
            this.setState({ imgLoaded: true });
        }
    }

    handleLoad = () => {
        this.setState({ imgLoaded: true });
    }

    render() {
        const { src, placeholder, alt, className, ...avatarProps } = this.props;
        const parentClass = classNames('avatar-image', {
            'avatar-image--loaded': this.state.imgLoaded
        }, className);

        return (
            <div className={ parentClass }>
                <Avatar className="avatar-image__image" {...avatarProps}>
                    <img
                        ref={ this.imgRef }
                        src={ src }
                        alt={ alt }
                        onLoad={ this.handleLoad }
                    />
                </Avatar>
                {
                    !this.state.imgLoaded && (
                        <AvatarFont className="avatar-image__placeholder" {...avatarProps}>
                            { placeholder }
                        </AvatarFont>
                    )
                }
            </div>
        )
    }
}

export { AvatarImage };
