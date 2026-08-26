import React from 'react';

import { FaIcon } from '../../../components/Icon';
import {
    Nav,
    NavItem,
    NavLink,
    Badge
} from './../../../components';

const MailboxLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" active className="d-flex">
                        Inbox
                        <Badge pill color="secondary" className="align-self-center ms-auto">
                            12
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        Draft
                        <Badge pill color="secondary" className="align-self-center ms-auto">
                            12
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        Sent
                        <Badge pill color="secondary" className="align-self-center ms-auto">
                            2
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        Trash
                        <Badge pill color="secondary" className="align-self-center ms-auto">
                            45
                        </Badge>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3">
                Labels
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="circle" fixedWidth className="text-primary me-2" />
                        Family
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="circle" fixedWidth className="text-info me-2" />
                        Friends
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="circle" fixedWidth className="text-success me-2" />
                        Work
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="circle" fixedWidth className="text-warning me-2" />
                        Trips
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="circle" fixedWidth className="text-danger me-2" />
                        Other
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaIcon icon="plus" fixedWidth className="me-2" />
                        Add New Label
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { MailboxLeftNav };
