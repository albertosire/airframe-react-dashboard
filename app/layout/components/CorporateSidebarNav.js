import React from 'react';
import { useLocation } from 'react-router-dom';

import { SidebarMenu } from './../../components';
import { FaIcon } from '../../components/Icon';
import {
    CORPORATE_MENU,
    getExampleBase,
    sectionTo
} from './../../data/corporateNav';

export const CorporateSidebarNav = () => {
    const { pathname } = useLocation();
    const base = getExampleBase(pathname);

    return (
        <SidebarMenu>
            {CORPORATE_MENU.map((item, index) => (
                item.divider ? (
                    <SidebarMenu.Divider key={`divider-${index}`} />
                ) : (
                    <SidebarMenu.Item
                        key={item.title}
                        icon={<FaIcon icon={item.icon.replace(/^fa-/, '')} fixedWidth />}
                        title={item.title}
                        to={sectionTo(base, item.path)}
                        exact={item.exact !== false}
                    />
                )
            ))}
        </SidebarMenu>
    );
};
