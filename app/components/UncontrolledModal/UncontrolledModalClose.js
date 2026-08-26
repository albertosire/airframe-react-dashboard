import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import { Consumer } from './context';

const UncontrolledModalClose = ({ tag: Tag = Button, ...otherProps }) => (
    <Consumer>
    {
        (value) => (
            <Tag
                { ...otherProps }
                onClick={ () => value.toggleModal() }
            />
        )
    }
    </Consumer>
);
UncontrolledModalClose.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
};

export { UncontrolledModalClose };
