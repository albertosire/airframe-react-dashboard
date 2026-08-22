import React from 'react';

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
                        <i className="fa fa-fw fa-circle text-primary me-2"></i>
                        Family
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-info me-2"></i>
                        Friends
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-success me-2"></i>
                        Work
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-warning me-2"></i>
                        Trips
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-danger me-2"></i>
                        Other
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-plus me-2"></i>
                        Add New Label
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { MailboxLeftNav };
