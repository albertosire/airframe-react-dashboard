import React from 'react';

import { FaIcon } from '../../../components/Icon';
import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from './../../../components';

const ChatCardHeader = () => (
    <React.Fragment>
    <h6 className="align-self-center mb-0">
        Chat with Romaine Weber
    </h6>
    <UncontrolledButtonDropdown className="align-self-center ms-auto">
    <DropdownToggle color="link" size="sm" className="text-decoration-none">
        <FaIcon icon="gear" /><FaIcon icon="angle-down" className="ms-2" />
    </DropdownToggle>
    <DropdownMenu right>
        <DropdownItem>
            <FaIcon icon="comment" fixedWidth className="me-2" />
            Private Message
        </DropdownItem>
        <DropdownItem>
            <FaIcon icon="search" fixedWidth className="me-2" />
            Search this Thread
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
            <FaIcon icon="ban" fixedWidth className="me-2" />
            Block this User
        </DropdownItem>
    </DropdownMenu>
    </UncontrolledButtonDropdown>
    </React.Fragment>
)

export { ChatCardHeader };
