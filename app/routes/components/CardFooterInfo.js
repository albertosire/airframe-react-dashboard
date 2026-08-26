import React from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from '../../components/Icon';

const CardFooterInfo = (props) => (
    <React.Fragment>
        <div className="small">
            <FaIcon icon={props.icon} fixedWidth className={`${props.iconClassName} me-2`} />
            { props.text }
        </div>
    </React.Fragment>

)
CardFooterInfo.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    text: PropTypes.node,
};
CardFooterInfo.defaultProps = {
    icon: "question-circle",
    iconClassName: "text-muted",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam beatae, nesciunt incidunt laudantium. Eveniet ratione quis accusantium dolorum velit maiores illo mollitia."
};

export { CardFooterInfo };
