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

const ProjectsLeftNav = () => (
  <React.Fragment>
    {/* START Left Nav  */}
    <div className="mb-4">
      <div className="small mb-3">Search</div>
      <InputGroup>
        <Input placeholder="Search for..." className="bg-white" />
        <InputGroupAddon addonType="append">
          <Button outline color="secondary">
            <i className="fa fa-search"></i>
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
            <i className="fa fa-fw fa-line-chart me-2"></i>
            Overview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-fw fa-calendar-o me-2"></i>
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
            <i className="fa fa-fw fa-star-o align-self-center me-2"></i>
            Analytics Redesign
            <Badge color="secondary" pill className="ms-auto align-self-center">
              12
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <i className="fa fa-fw fa-star-o align-self-center me-2"></i>
            New Website
            <Badge color="secondary" pill className="ms-auto align-self-center">
              4
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className="d-flex">
            <i className="fa fa-fw fa-star-o align-self-center me-2"></i>
            Chart for Newsletter
            <Badge color="secondary" pill className="ms-auto align-self-center">
              9
            </Badge>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-fw fa-plus me-2"></i>
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
            <i className="fa fa-fw fa-circle text-success ms-auto align-self-center ms-2"></i>
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
            <i className="fa fa-fw fa-circle text-warning ms-auto align-self-center ms-2"></i>
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
            <i className="fa fa-fw fa-circle text-danger ms-auto align-self-center ms-2"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i className="fa fa-fw fa-plus me-2"></i>
            Add New People
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    {/* END Left Nav  */}
  </React.Fragment>
);

export { ProjectsLeftNav };
