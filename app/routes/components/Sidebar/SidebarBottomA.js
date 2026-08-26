import React from 'react';

import {
    Button,
    Sidebar,
    UncontrolledPopover,
    PopoverBody
} from './../../../components';

import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';
import { FaIcon } from '../../../components/Icon';

const SidebarBottomA = () => (
    <React.Fragment>
        { /* START Desktop */ }
        <Sidebar.HideSlim>
            <Sidebar.Section>
                <FooterAuth className="text-muted" />
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END Desktop */ }

        { /* START Slim Only */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section className="text-center">
                <Button
                    id="UncontrolledSidebarPopoverFooter"
                    color="link"
                    className="sidebar__link p-0 mt-3"
                >
                    <FaIcon icon="question-circle-o" fixedWidth />
                </Button>
                <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                    <PopoverBody>
                        <FooterText />
                    </PopoverBody>
                </UncontrolledPopover>
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END Slim Only */ }
    </React.Fragment>
)

export { SidebarBottomA };
