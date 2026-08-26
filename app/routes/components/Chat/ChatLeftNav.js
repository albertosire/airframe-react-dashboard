import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Nav,
  NavItem,
  Media,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Avatar,
  AvatarAddOn,
  NavLink,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const ChatLeftNav = () => (
  <React.Fragment>
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="small mb-3">Search</div>
      <InputGroup>
        <Input placeholder="Search for..." />
        <InputGroupAddon addonType="append">
          <Button outline color="secondary">
            <FaIcon icon="search" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
    {/* END Left Nav  */}
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="mt-4 mb-2">
        <span className="small">Contacts</span>
      </div>
      <Nav pills vertical>
        <NavItem>
          <NavLink href="/chat" active>
            <Media>
              <Media left className="align-self-start me-3">
                <Avatar.Image
                  size="sm"
                  src={randomAvatar()}
                  addOns={[
                    <AvatarAddOn.Icon
                      icon="circle"
                      color="primary"
                      key="avatar-icon-bg"
                    />,
                    <AvatarAddOn.Icon
                      icon="circle"
                      color="danger"
                      key="avatar-icon-fg"
                    />,
                  ]}
                />
              </Media>
              <Media body>
                <div className="mt-0 d-flex">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <span className="small">{faker.location.country()}</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            <Media>
              <Media left className="align-self-start me-3">
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
              </Media>
              <Media body>
                <div className="mt-0 d-flex">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <span className="small">{faker.location.country()}</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            <Media>
              <Media left className="align-self-start me-3">
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
                      color="secondary"
                      key="avatar-icon-fg"
                    />,
                  ]}
                />
              </Media>
              <Media body>
                <div className="mt-0 d-flex">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <span className="small">{faker.location.country()}</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            Show All <span className="small me-2">(345)</span>
            <FaIcon icon="angle-down" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="mt-4 mb-2">
        <span className="small">Updates</span>
      </div>
      <Nav pills vertical>
        <NavItem>
          <NavLink href="/chat">
            <Media>
              <Media left className="align-self-start me-1">
                <span className="fa-stack fa-lg fa-fw d-flex align-self-center me-3">
                  <FaIcon icon="circle" fixedWidth className="text-warning" />
                  <FaIcon icon="exclamation" fixedWidth className="text-white" />
                </span>
              </Media>
              <Media body>
                <div className="mt-0">{faker.hacker.phrase()}</div>
                <span className="small">24-Aug-2012, 12:12</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            <Media>
              <Media left className="align-self-start me-1">
                <span className="fa-stack fa-lg fa-fw d-flex align-self-center me-3">
                  <FaIcon icon="circle" fixedWidth className="text-danger" />
                  <FaIcon icon="close" fixedWidth className="text-white" />
                </span>
              </Media>
              <Media body>
                <div className="mt-0">{faker.hacker.phrase()}</div>
                <span className="small">24-Aug-2012, 12:12</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            <Media>
              <Media left className="align-self-start me-1">
                <span className="fa-stack fa-lg fa-fw d-flex align-self-center me-3">
                  <FaIcon icon="circle" fixedWidth className="text-success" />
                  <FaIcon icon="check" fixedWidth className="text-white" />
                </span>
              </Media>
              <Media body>
                <div className="mt-0">{faker.hacker.phrase()}</div>
                <span className="small">24-Aug-2012, 12:12</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            <Media>
              <Media left className="align-self-start me-1">
                <span className="fa-stack fa-lg fa-fw d-flex align-self-center me-3">
                  <FaIcon icon="circle" fixedWidth className="text-primary" />
                  <FaIcon icon="info" fixedWidth className="text-white" />
                </span>
              </Media>
              <Media body>
                <div className="mt-0">{faker.hacker.phrase()}</div>
                <span className="small">24-Aug-2012, 12:12</span>
              </Media>
            </Media>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">
            Show All <span className="small me-2">(12)</span>
            <FaIcon icon="angle-down" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
  </React.Fragment>
);

export { ChatLeftNav };
