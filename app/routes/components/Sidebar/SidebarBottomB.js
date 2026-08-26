import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Button,
  Sidebar,
  UncontrolledButtonDropdown,
  DropdownToggle,
  UncontrolledPopover,
  PopoverBody,
  Media,
  Avatar,
  AvatarAddOn,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";

import { DropdownProfile } from "../Dropdowns/DropdownProfile";
import { FooterAuth } from "../Pages/FooterAuth";
import { FooterText } from "../FooterText";
import { FaIcon } from '../../../components/Icon';

const SidebarBottomB = () => (
  <React.Fragment>
    {/* START Sidebar BOTTOM: B */}
    <Sidebar.Section>
      {/* START DESKTOP View */}
      <Sidebar.HideSlim>
        <UncontrolledButtonDropdown direction="up" className="mb-3">
          <DropdownToggle
            color="link"
            className="btn-profile text-start ps-0 pb-0"
          >
            <Media>
              <Media left middle className="me-3">
                <Avatar.Image
                  size="md"
                  src={randomAvatar()}
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
              </Media>
              <Media body>
                <span className="mt-0 d-flex h6 mb-1 text-truncate">
                  {faker.person.firstName()} {faker.person.lastName()}{" "}
                  <FaIcon icon="angle-up" fixedWidth className="ms-1" />
                </span>
                <p className="small text-truncate">{faker.person.jobTitle()}</p>
              </Media>
            </Media>
          </DropdownToggle>
          <DropdownProfile />
        </UncontrolledButtonDropdown>
      </Sidebar.HideSlim>
      {/* END DESKTOP View */}
      {/* START SLIM Only View */}
      <Sidebar.ShowSlim>
        <div className="text-center">
          <UncontrolledButtonDropdown direction="right" className="mb-3">
            <DropdownToggle color="link" className="text-start ps-0 pb-0">
              <Avatar.Image
                size="sm"
                src={randomAvatar()}
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
            </DropdownToggle>
            <DropdownProfile />
          </UncontrolledButtonDropdown>
        </div>
      </Sidebar.ShowSlim>
      {/* END SLIM Only View  */}
      {/* START DESKTOP View */}
      <Sidebar.HideSlim>
        <FooterAuth />
      </Sidebar.HideSlim>
      {/* END DESKTOP View */}
      {/* START SLIM Only View */}
      <Sidebar.ShowSlim>
        <div className="text-center">
          <Button
            color="link"
            id="UncontrolledSidebarPopoverFooter"
            className="sidebar__link p-0"
          >
            <FaIcon icon="question-circle-o" fixedWidth />
          </Button>
          <UncontrolledPopover
            placement="left-end"
            target="UncontrolledSidebarPopoverFooter"
          >
            <PopoverBody>
              <FooterText />
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </Sidebar.ShowSlim>
      {/* END SLIM Only View */}
    </Sidebar.Section>
    {/* END Sidebar BOTTOM: B */}
  </React.Fragment>
);

export { SidebarBottomB };
