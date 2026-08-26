import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import { FaIcon } from '../../../components/Icon';
import {
    Button,
    Breadcrumb,
    ButtonToolbar,
    UncontrolledTooltip,
    BreadcrumbItem,
    ButtonGroup,
} from './../../../components';

const ProjectsSmHeader = (props ) => (
    <React.Fragment>
        { /* START Header Nav */}
        <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
            <Breadcrumb className="me-auto d-flex align-items-center">
                { /* START 1st */}
                <BreadcrumbItem active>
                    <Link to="/">
                        <FaIcon icon="home" />
                    </Link>
                </BreadcrumbItem>
                { /* END 1st */}

                { /* START 2nd */}
                { 
                    props.title ? (
                        <BreadcrumbItem>
                            <Link to={ props.subTitleLink }>
                                {props.subTitle}
                            </Link>
                        </BreadcrumbItem>
                    ): (
                        <BreadcrumbItem active>
                            {props.subTitle}
                        </BreadcrumbItem>
                    )
                }
                { /* END 2nd */}

                { /* START 3rd */}
                {
                    props.title && (
                        <BreadcrumbItem active>
                            {props.title}
                        </BreadcrumbItem>  
                    )
                }
                { /* END 3rd */}
            </Breadcrumb>
            <ButtonToolbar>
                <ButtonGroup className="me-auto mr-md-2">
                    <Button tag={ NavLink } to={ `${ props.linkList }` } color="secondary" outline className="align-self-center" id="tooltipShowList">
                        <FaIcon icon="bars" fixedWidth />
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipShowList">
                        Show List
                    </UncontrolledTooltip>
                    <Button tag={ NavLink } to={ `${ props.linkGrid }` } color="secondary" outline className="align-self-center" id="tooltipShowGrid">
                        <FaIcon icon="th-large" fixedWidth />
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipShowGrid">
                        Show Grid
                    </UncontrolledTooltip>
                        {
                            props.btnShowKanban && (
                                <React.Fragment>
                                    <Button tag={ NavLink } to={ `${ props.linkKanban }` } color="secondary" outline className="align-self-center" id="tooltipShowKanban">
                                        <FaIcon icon="trello" fixedWidth />
                                    </Button>
                                    <UncontrolledTooltip placement="bottom" target="tooltipShowKanban">
                                        Show Kanban
                                    </UncontrolledTooltip>
                                 </React.Fragment>
                                )
                        }
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="primary" className="align-self-center" id="tooltipAddNew">
                        <FaIcon icon="plus" fixedWidth />
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipAddNew">
                        Add New
                    </UncontrolledTooltip>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
        { /* END Header Nav */}
    </React.Fragment>
)
ProjectsSmHeader.propTypes = {
    subTitle: PropTypes.node,
    title: PropTypes.node,
    subTitleLink: PropTypes.string,
    linkList: PropTypes.node,
    linkGrid: PropTypes.node,
    btnShowKanban: PropTypes.bool,
        linkKanban: PropTypes.node
};
ProjectsSmHeader.defaultProps = {
    subTitle: "Folder",
    linkList: "#",
    linkGrid: "#",
    btnShowKanban: false,
        linkKanban: "/apps/tasks-kanban"
};

export { ProjectsSmHeader };
