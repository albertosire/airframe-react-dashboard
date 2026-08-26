import React from 'react';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { withPageConfig } from './../Layout';
import { FaIcon } from '../../components/Icon';

const SidebarTrigger = (props) => {
    const { tag, pageConfig, children, ...otherProps } = props;
    const Tag = tag || NavLink;
    return (
        <Tag
            { ...otherProps }
            onClick={ (e) => {
                e.preventDefault();
                props.pageConfig.toggleSidebar();
            } }
            active={ Tag !== 'a' ? !pageConfig.sidebarCollapsed : undefined }
        >
            { children || <FaIcon icon="bars" fixedWidth /> }
        </Tag>
    )
};
SidebarTrigger.propTypes = {
    tag: PropTypes.any,
    children: PropTypes.node,
    pageConfig: PropTypes.object
}
SidebarTrigger.defaultProps = {
    tag: NavLink,
    children: <FaIcon icon="bars" fixedWidth />
}

const cfgSidebarTrigger = withPageConfig(SidebarTrigger);

export {
    cfgSidebarTrigger as SidebarTrigger
}
