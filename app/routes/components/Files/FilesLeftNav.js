import React from 'react';

import { FaIcon } from '../../../components/Icon';
import {
    Nav,
    NavItem,
    NavLink,
    Badge
} from './../../../components';

const FilesLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" active>
                        <FaIcon icon="history" fixedWidth className="me-2" />
                        Updates
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="files-o" fixedWidth className="me-2" />
                        Files
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="users" fixedWidth className="me-2" />
                        Team
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="image" fixedWidth className="me-2" />
                        Photos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="link" fixedWidth className="me-2" />
                        Links
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="calendar-o" fixedWidth className="me-2" />
                        Events
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="trash" fixedWidth className="me-2" />
                        Deleted
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3">
                Tags
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <FaIcon icon="circle" fixedWidth className="text-primary align-self-center me-2" />
                        Documents
                        <Badge color="secondary" pill className="ms-auto align-self-center">
                            12
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <FaIcon icon="circle" fixedWidth className="text-info align-self-center me-2" />
                        Pictures
                        <Badge color="secondary" pill className="ms-auto align-self-center">
                            3
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <FaIcon icon="circle" fixedWidth className="text-success align-self-center me-2" />
                        Videos
                        <Badge color="secondary" pill className="ms-auto align-self-center">
                            67
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <FaIcon icon="circle" fixedWidth className="text-warning align-self-center me-2" />
                        Music
                        <Badge color="secondary" pill className="ms-auto align-self-center">
                            5
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <FaIcon icon="circle" fixedWidth className="text-danger align-self-center me-2" />
                        Other
                        <Badge color="secondary" pill className="ms-auto align-self-center">
                            1
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="plus" fixedWidth className="me-2" />
                        Add New
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { FilesLeftNav };
