import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  InputGroup,
  Button,
  Input,
  InputGroupAddon,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Media,
  Avatar,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const ProjectsLeftNav = () => (
  <React.Fragment>
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="small mb-3">Search</div>
      <InputGroup>
        <Input placeholder="Search for..." className="bg-white" />
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
      <div className="small mb-3">Favorites</div>
      <Nav pills vertical>
        <NavItem>
          <NavLink href="#" active>
            <FaIcon icon="line-chart" fixedWidth className="me-2" />
            Overview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FaIcon icon="calendar-o" fixedWidth className="me-2" />
            Calendar
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="small mb-3">Projects</div>
      <Nav pills vertical>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <FaIcon icon="star-o" fixedWidth className="align-self-center me-2" />
            Analytics Redesign
            <Badge color="secondary" pill className="ms-auto align-self-center">
              12
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <FaIcon icon="star-o" fixedWidth className="align-self-center me-2" />
            New Website
            <Badge color="secondary" pill className="ms-auto align-self-center">
              4
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <FaIcon icon="star-o" fixedWidth className="align-self-center me-2" />
            Chart for Newsletter
            <Badge color="secondary" pill className="ms-auto align-self-center">
              9
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FaIcon icon="plus" fixedWidth className="me-2" />
            Add New Project
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="small mb-3">People</div>
      <Nav pills vertical>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <Media>
              <Media left middle className="me-3 align-self-center">
                <Avatar.Image size="md" src={randomAvatar()} />
              </Media>
              <Media body>
                <div className="mt-0">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <span className="small">
                  {faker.location.state()}, {faker.location.stateAbbr()}
                </span>
              </Media>
            </Media>
            <FaIcon icon="circle" fixedWidth className="text-success ms-auto align-self-center ms-2" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <Media>
              <Media left middle className="me-3 align-self-center">
                <Avatar.Image size="md" src={randomAvatar()} />
              </Media>
              <Media body>
                <div className="mt-0">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <span className="small">
                  {faker.location.state()}, {faker.location.stateAbbr()}
                </span>
              </Media>
            </Media>
            <FaIcon icon="circle" fixedWidth className="text-warning ms-auto align-self-center ms-2" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <Media>
              <Media left middle className="me-3 align-self-center">
                <Avatar.Image size="md" src={randomAvatar()} />
              </Media>
              <Media body>
                <div className="mt-0">
                  {faker.person.firstName()} {faker.person.lastName()}
                </div>
                <span className="small">
                  {faker.location.state()}, {faker.location.stateAbbr()}
                </span>
              </Media>
            </Media>
            <FaIcon icon="circle" fixedWidth className="text-danger ms-auto align-self-center ms-2" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FaIcon icon="plus" fixedWidth className="me-2" />
            Add New People
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
  </React.Fragment>
);

export { ProjectsLeftNav };
