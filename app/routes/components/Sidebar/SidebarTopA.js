import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import { Link } from "react-router-dom";

import {
  Sidebar,
  UncontrolledButtonDropdown,
  Avatar,
  AvatarAddOn,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const avatarImg = randomAvatar();

const SidebarTopA = () => (
  <React.Fragment>
    <Sidebar.HideSlim>
      <Sidebar.Section className="pt-0">
        <Link to="/dashboards/projects" className="d-block">
          <Sidebar.HideSlim>
            <Avatar.Image
              size="lg"
              src={avatarImg}
              addOns={[
                <AvatarAddOn.Icon
                  icon="circle"
                  color="white"
                  key="avatar-icon-bg"
                />,
                <AvatarAddOn.Icon
                  icon="circle"
                  color="success"
                  key="avatar-icon-fg"
                />,
              ]}
            />
          </Sidebar.HideSlim>
        </Link>

        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="link"
            className="ps-0 pb-0 btn-profile sidebar__link"
          >
            {faker.person.firstName()} {faker.person.lastName()}
            <FaIcon icon="angle-down" className="ms-2" />
          </DropdownToggle>
          <DropdownMenu persist>
            <DropdownItem header>
              {faker.person.firstName()} {faker.person.lastName()}
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>
              Autenticação via OpenSSO
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <div className="small sidebar__link--muted">
          {faker.person.jobTitle()}
        </div>
      </Sidebar.Section>
    </Sidebar.HideSlim>

    <Sidebar.ShowSlim>
      <Sidebar.Section>
        <Avatar.Image
          size="sm"
          src={avatarImg}
          addOns={[
            <AvatarAddOn.Icon
              icon="circle"
              color="white"
              key="avatar-icon-bg"
            />,
            <AvatarAddOn.Icon
              icon="circle"
              color="success"
              key="avatar-icon-fg"
            />,
          ]}
        />
      </Sidebar.Section>
    </Sidebar.ShowSlim>
  </React.Fragment>
);

export { SidebarTopA };
