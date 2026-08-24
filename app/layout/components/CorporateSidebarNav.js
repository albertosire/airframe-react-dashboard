import React from 'react';
import { useLocation } from 'react-router-dom';

import { SidebarMenu } from './../../components';
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
                        icon={<i className={`fa fa-fw ${item.icon}`}></i>}
                        title={item.title}
                        to={sectionTo(base, item.path)}
                        exact={item.exact !== false}
                    />
                )
            ))}
        </SidebarMenu>
    );
};
