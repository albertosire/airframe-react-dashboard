import React from 'react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarTrigger
} from './../../components';

import { LogoThemed } from '../../routes/components/LogoThemed/LogoThemed';
import { CorporateSidebarNav } from './CorporateSidebarNav';
import { CorporateSidebarUser } from './CorporateSidebarUser';
import { FaIcon } from '../../components/Icon';

export const CorporateSidebar = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={'a'} href="#">
                <FaIcon icon="times-circle" fixedWidth />
            </SidebarTrigger>
        </Sidebar.Close>

        <Sidebar.HideSlim>
            <Sidebar.Section>
                <Link to="/" className="sidebar__brand">
                    <LogoThemed checkBackground />
                </Link>
            </Sidebar.Section>
        </Sidebar.HideSlim>

        <Sidebar.MobileFluid>
            <CorporateSidebarUser />

            <Sidebar.Section fluid cover>
                <CorporateSidebarNav />
            </Sidebar.Section>
        </Sidebar.MobileFluid>
    </Sidebar>
);
