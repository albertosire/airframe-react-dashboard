import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Badge,
  Avatar,
  Media,
  CustomInput,
  CardFooter,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  AvatarAddOn,
} from "./../../../components";

import { randomArray, randomAvatar } from "./../../../utilities";
import { FaIcon } from '../../../components/Icon';

const badgesColors = ["secondary"];

const avatarStatus = ["secondary", "warning", "danger", "success"];

const prioStatus = [
  <React.Fragment key="1">
    <FaIcon icon="circle" className="text-success me-2" />
    Small
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
  <React.Fragment key="2">
    <FaIcon icon="circle" className="text-primary me-2" />
    Normal
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
  <React.Fragment key="3">
    <FaIcon icon="circle" className="text-warning me-2" />
    High
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
  <React.Fragment key="3">
    <FaIcon icon="circle" className="text-danger me-2" />
    Big
    <FaIcon icon="angle-down" className="ms-2" />
  </React.Fragment>,
];

const TasksCardGrid = (props) => (
  <React.Fragment>
    {/* START Card */}
    <Card>
      <CardBody>
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="link"
            link
            size="sm"
            className="ps-0 mb-3 text-decoration-none"
          >
            {randomArray(prioStatus)}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select Priority</DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-danger me-2" />
              Big
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-warning me-2" />
              High
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-primary me-2" />
              Normal
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="circle" className="text-success me-2" />
              Small
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <Media className="mb-2">
          <Media left middle className="me-2">
            <CustomInput
              type="checkbox"
              id={`TasksCardGrid-${props.id}`}
              label=""
            />
          </Media>
          <Media body>
            <span className="me-2">#{faker.number.int()}</span>
            <Link to="/apps/task-details" className="text-decoration-none">
              {faker.hacker.phrase()}
            </Link>
          </Media>
        </Media>
        <p className="mb-2">{faker.lorem.sentence()}</p>
        <div className="mb-3">
          <Badge pill color={randomArray(badgesColors)} className="me-1">
            {faker.commerce.department()}
          </Badge>
          <Badge pill color={randomArray(badgesColors)} className="me-1">
            {faker.commerce.department()}
          </Badge>
        </div>
        <div>
          <Avatar.Image
            size="md"
            src={randomAvatar()}
            className="me-3"
            addOns={[
              <AvatarAddOn.Icon
                icon="circle"
                color="white"
                key="avatar-icon-bg"
              />,
              <AvatarAddOn.Icon
                icon="circle"
                color={randomArray(avatarStatus)}
                key="avatar-icon-fg"
              />,
            ]}
          />
          <Avatar.Image
            size="md"
            src={randomAvatar()}
            className="me-3"
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
          <Avatar.Image
            size="md"
            src={randomAvatar()}
            className="me-3"
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
        </div>
      </CardBody>
      <CardFooter className="d-flex">
        <span className="align-self-center">20 Sep, Fri, 2018</span>
        <UncontrolledButtonDropdown className="align-self-center ms-auto">
          <DropdownToggle color="link" size="sm" className="pe-0">
            <FaIcon icon="gear" />
            <FaIcon icon="angle-down" className="ms-2" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <FaIcon icon="folder-open" fixedWidth className="me-2" />
              View
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="ticket" fixedWidth className="me-2" />
              Add Task
            </DropdownItem>
            <DropdownItem>
              <FaIcon icon="paperclip" fixedWidth className="me-2" />
              Add Files
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <FaIcon icon="trash" fixedWidth className="me-2" />
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </CardFooter>
    </Card>
    {/* END Card */}
  </React.Fragment>
);

TasksCardGrid.propTypes = {
  id: PropTypes.node,
};
TasksCardGrid.defaultProps = {
  id: "1",
};

export { TasksCardGrid };
