import React from 'react';
import PropTypes from 'prop-types';

import { FaIcon } from '../../../../components/Icon';
import {
    Button
} from './../../../../components';

// eslint-disable-next-line react/display-name
const ButtonInputFR = React.forwardRef((props, ref) => (
    <Button outline
        onClick={props.onClick}
        ref={ref}
    >
        <FaIcon icon="calendar-o" fixedWidth className="me-1" />
        { props.value }
    </Button>
));
ButtonInputFR.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
}

export { ButtonInputFR as ButtonInput };
